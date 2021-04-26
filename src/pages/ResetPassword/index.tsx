import React, { useCallback, useRef } from 'react';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { useHistory, useLocation } from 'react-router-dom';

import getValidationErros from '../../utils/getValidationError';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import { Container, Image, Form } from './styles';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface IResetPasswordFormData{
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const location = useLocation();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async ({ password, password_confirmation }: IResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().min(6, 'Mínimo de 06 caracteres'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Confirmação incorreta',
          ),
        });

        await schema.validate({
          password,
          password_confirmation,
        }, {
          abortEarly: false,
        });

        const [, token] = location.search.split('=');

        console.log(token);

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          token,
          password,
          password_confirmation,
        });

        addToast({
          type: 'success',
          title: 'Success!!',
          description: 'Your passoword has been updated',
        });

        history.push('/signin');
      } catch (err) {
        console.log(err.message);
        if (err instanceof Yup.ValidationError) {
          const erros = getValidationErros(err);
          formRef.current?.setErrors(erros);
        }
        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description: 'Ocorreu um erro ao resetar sua senha, tente novamente',
        });
      }
    },
    [addToast, history, location],
  );

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <Input
          name="password"
          placeholder="Password"
          type="password"
        />
        <Input
          name="password_confirmation"
          placeholder="Confirm Password"
          type="password"
        />
        <Button>Reset Password</Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
