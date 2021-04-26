import React, {
  useRef, useCallback, useState, useEffect,
} from 'react';

import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { useHistory, useLocation } from 'react-router-dom';

import getValidationErros from '../../utils/getValidationError';

import Column from '../../components/Column';
import Input from '../../components/Input';
import MaskedInput from '../../components/MaskedInput';
import Row from '../../components/Row';
import Select from '../../components/Select';
import Header from './components/Header';

import { Container, Form } from './styles';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

interface Customer {
  id: string;
  name: string;
  age: number;
  marital_status: string;
  cpf: string;
  city: string;
  state: string;
}

interface EditCustomerFormData {
  name: string;
  age: number;
  marital_status: string;
  cpf: string;
  city: string;
  state: string;
}

interface LocationStateProps{
    customer_id: string;
}

const ShowCustomer: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>();

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const location = useLocation();
  const history = useHistory();

  const { customer_id } = location.state as LocationStateProps;

  useEffect(() => {
    api.get(`/customers/${customer_id}`).then((response) => setCustomer(response.data));
  }, [customer_id]);

  const handleDeleteCustomer = useCallback(async () => {
    await api.delete(`/customers/${customer_id}`);
    history.push('/dashboard');
  }, [customer_id, history]);

  const handleSubmit = useCallback(async ({
    name, age, marital_status, cpf, city, state,
  }:EditCustomerFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        age: Yup.number()
          .required('Idade obrigatória')
          .integer('Digite uma idade válida'),
        marital_status: Yup.string().required(),
        cpf: Yup.string().min(11).required(),
        city: Yup.string().required(),
        state: Yup.string().required(),
      });

      await schema.validate({
        name,
        age,
        marital_status,
        cpf,
        city,
        state,
      }, {
        abortEarly: false,
      });

      await api.put(`/customers/${customer_id}`, {
        name,
        age,
        marital_status,
        cpf,
        city,
        state,
      });

      addToast({
        type: 'success',
        title: 'New customer has been saved successfully',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erros = getValidationErros(err);
        formRef.current?.setErrors(erros);
      }
      addToast({
        type: 'error',
        title: 'Something went wrong',
        description: err.message,
      });
    }
  }, [addToast, customer_id]);

  if (!customer) {
    return <h1>Loading</h1>;
  }

  return (

    <Container>
      <Header handleDeleteCustomer={handleDeleteCustomer} />
      <Form
        ref={formRef}
        initialData={{
          name: customer.name,
          age: customer.age,
          marital_status: customer.marital_status,
          cpf: customer.cpf,
          city: customer.city,
          state: customer.state,
        }}
        onSubmit={handleSubmit}
      >
        <h1>Update Customer</h1>
        <Row>
          <Column>
            <Input name="name" placeholder="Name" />
            <Input name="age" placeholder="Age" type="number" />
            <Select
              name="marital_status"
              label="Marital Status"
              options={[
                { value: 'Married', label: 'Married' },
                { value: 'Widowed ', label: 'Widowed' },
                { value: 'Separated', label: 'Separated' },
                { value: 'Divorced', label: 'Divorced' },
                { value: 'Single', label: 'Single' },
              ]}
            />
          </Column>
          <Column>
            <MaskedInput name="cpf" mask="999.999.999-99" placeholder="CPF" />
            <Input name="city" placeholder="City" />
            <Input name="state" placeholder="State" />
          </Column>
        </Row>

        <button type="submit">Finish</button>
      </Form>

    </Container>
  );
};

export default ShowCustomer;
