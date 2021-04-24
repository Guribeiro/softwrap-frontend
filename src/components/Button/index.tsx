import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <ButtonStyled type="submit" {...rest}>
    {loading ? 'Carregando' : children}
  </ButtonStyled>
);

export default Button;
