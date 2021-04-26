import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import getValidationErros from '../../utils/getValidationError';
import { Container, Image, Form } from './styles';

import softwrapLogo from '../../assets/softwrap.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

interface SignInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ email, password }: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(6, 'Mínimo de 06 caracteres'),
        });

        await schema.validate({
          email,
          password,
        }, {
          abortEarly: false,
        });

        await signIn({
          email,
          password,
        });

        history.push('/dashboard');
      } catch (err) {
        console.log(err.message);
        if (err instanceof Yup.ValidationError) {
          const erros = getValidationErros(err);
          formRef.current?.setErrors(erros);
        }
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Logo />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <Input icon={FiMail} name="email" placeholder="Email" type="email" />
        <Input icon={FiLock} name="password" placeholder="Password" type="password" />
        <span>
          <Link to="/forgot-password">Forgot Password</Link>
        </span>
        <Button type="submit">Sign in</Button>
        <Link to="/">Do not have an account?</Link>
      </Form>
    </Container>
  );
};

export default Signin;
