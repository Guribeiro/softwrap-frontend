import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Image, Form } from './styles';

import softwrapLogo from '../../assets/softwrap.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

interface SignUpFormData {
  email: string;
  password: string;
  ConfirmPassword: string;
}

const Signup: React.FC = () => {
  const handleSubmit = useCallback((data: SignUpFormData) => {
    console.log(data);
  }, []);
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <Input icon={FiMail} name="email" placeholder="Email" type="email" />
        <Input icon={FiLock} name="password" placeholder="Password" type="password" />
        <Input icon={FiLock} name="confirmPassword" placeholder="Confirm Password" type="password" />
        <Button>Sign up</Button>
        <Link to="/signin">Already have an account ?</Link>
      </Form>
    </Container>
  );
};

export default Signup;
