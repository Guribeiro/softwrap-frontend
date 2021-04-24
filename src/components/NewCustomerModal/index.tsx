import React, { useState, useCallback, FormEvent } from 'react';
import Modal from 'react-modal';

import { Form } from './styles';
import closeIcon from '../../assets/close.svg';
// import incomeIcon from '../../assets/income.svg';
// import outcomeIcon from '../../assets/outcome.svg';

// import { api } from '../../service/api';

import Input from '../Input';
import Row from '../Row';
import Column from '../Column';
import MaskedInput from '../MaskedInput';

import Select from '../Select';

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

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  const handleSubmit = useCallback(async (data: NewCustomerFormData) => {
    console.log(data);
  }, []);

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
      <Form onSubmit={handleSubmit}>
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
            <MaskedInput name="cpf" mask="999.999.999-99" placeholder="___.___.___-__" />
            <Input name="city" placeholder="City" />
            <Input name="state" placeholder="State" />
          </Column>
        </Row>

        <button type="submit">Finish</button>
      </Form>
    </Modal>
  );
};

export default NewTransactionModal;
