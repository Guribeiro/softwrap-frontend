import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
// import { Form } from '@unform/web';
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
  const handleSubmit = useCallback((data: SignInFormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
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
