import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import getValidationErros from '../../utils/getValidationError';

import { Container, Image, Form } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ name, email, password }: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(8, 'Mínimo de 08 caracteres'),
        });

        await schema.validate({
          name,
          email,
          password,
        }, {
          abortEarly: false,
        });

        await api.post('/', {
          name,
          email,
          password,
        });

        history.push('/signin');
      } catch (err) {
        console.log(err.message);
        if (err instanceof Yup.ValidationError) {
          const erros = getValidationErros(err);
          formRef.current?.setErrors(erros);
        }
      }
    },
    [history],
  );
  return (
    <Container>
      <Logo />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <Input icon={FiUser} name="name" placeholder="Name" type="text" />
        <Input icon={FiMail} name="email" placeholder="Email" type="email" />
        <Input icon={FiLock} name="password" placeholder="Password" type="password" />
        <Button>Sign up</Button>
        <Link to="/signin">Already have an account ?</Link>
      </Form>
    </Container>
  );
};

export default Signup;
