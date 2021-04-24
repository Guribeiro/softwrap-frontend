import React, { useCallback } from 'react';
import { FiMail } from 'react-icons/fi';
import { Container, Image, Form } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../components/Logo';

interface ForgotPasswordFormData {
  email: string;
}

const Signin: React.FC = () => {
  const handleSubmit = useCallback((data: ForgotPasswordFormData) => {
    console.log(data);
  }, []);
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <h1>Forgot Password?</h1>
        <p>Please, enter your email address below</p>
        <Input icon={FiMail} name="email" placeholder="Email" type="email" />
        <Button>Send</Button>
      </Form>
    </Container>
  );
};

export default Signin;
