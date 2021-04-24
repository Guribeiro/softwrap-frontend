import React from 'react';

import { Container, Content } from './styles';

import LogoImage from '../../assets/softwrap.png';

interface HeaderProps {
    onOpenNewCustomerModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewCustomerModal }) => (
  <Container>
    <Content>
      <img src={LogoImage} alt="tdmoney-logo-" />
      <button onClick={onOpenNewCustomerModal} type="button">Add Customer</button>
    </Content>
  </Container>
);

export default Header;
