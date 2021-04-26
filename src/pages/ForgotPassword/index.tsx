import React, { useCallback, useRef, useState } from 'react';
import { FiMail } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import { useToast } from '../../hooks/toast';
import getValidationErros from '../../utils/getValidationError';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../components/Logo';
import api from '../../services/api';

import { Container, Image, Form } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const Signin: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async ({ email }: ForgotPasswordFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
        });

        await schema.validate({
          email,
        }, {
          abortEarly: false,
        });

        await api.post('/password/forgot', {
          email,
        });

        addToast({
          type: 'info',
          title: 'Recover password email has been sent',
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
      } finally {
        setLoading(false);
        history.push('signin');
      }
    },
    [addToast],
  );
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <h1>Forgot Password?</h1>
        <p>Please, enter your email address below</p>
        <Input icon={FiMail} name="email" placeholder="Email" type="email" />
        <Button loading={loading}>Send</Button>
      </Form>
    </Container>
  );
};

export default Signin;
