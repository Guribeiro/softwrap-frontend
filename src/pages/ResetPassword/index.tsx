import React, { useCallback } from 'react';
import { Container, Image, Form } from './styles';

import softwrapLogo from '../../assets/softwrap.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

interface ResetPasswordFormData{
  old_password: string;
  password: string;
  new_password: string;
}

const ResetPassword: React.FC = () => {
  const handleSubmit = useCallback((data:ResetPasswordFormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <Input
          name="oldPassword"
          placeholder="Old Password"
          type="text"
        />
        <Input
          name="password"
          placeholder="new Password"
          type="password"
        />
        <Input
          name="confirmPassword"
          placeholder="Confirm New Password"
          type="password"
        />
        <Button>Reset Password</Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
