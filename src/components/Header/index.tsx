import React from 'react';
import { FiPower } from 'react-icons/fi';

import { Container, Content, SignOutButton } from './styles';

import LogoImage from '../../assets/softwrap.png';
import { useAuth } from '../../hooks/auth';

interface HeaderProps {
    onOpenNewCustomerModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewCustomerModal }) => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <img src={LogoImage} alt="tdmoney-logo-" />
        <section>
          <button onClick={onOpenNewCustomerModal} type="button">Add Customer</button>
          <div>
            <SignOutButton onClick={signOut}>
              <FiPower size={18} />
            </SignOutButton>
          </div>
        </section>
      </Content>
    </Container>
  );
};

export default Header;
