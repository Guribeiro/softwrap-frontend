import React, { useCallback, useRef } from 'react';
import Modal from 'react-modal';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import getValidationErros from '../../utils/getValidationError';

import { Form } from './styles';
import closeIcon from '../../assets/close.svg';

import api from '../../services/api';

import Input from '../Input';
import Row from '../Row';
import Column from '../Column';
import MaskedInput from '../MaskedInput';

import Select from '../Select';
import { useToast } from '../../hooks/toast';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface NewCustomerFormData {
  name: string;
  age: number;
  marital_status: string;
  cpf: string;
  city: string;
  state: string;
}

const NewCustomerModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(async ({
    name, age, marital_status, cpf, city, state,
  }:NewCustomerFormData) => {
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

      await api.post('/customers', {
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

      history.go(0);
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
  }, [addToast, history]);

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar modal" />
      </button>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Register Customer</h1>
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
    </Modal>
  );
};

export default NewCustomerModal;
