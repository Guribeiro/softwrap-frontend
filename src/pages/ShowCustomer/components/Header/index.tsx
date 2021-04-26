import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { useHistory, Link } from 'react-router-dom';

import { Container, Content, SignOutButton } from './styles';

interface HeaderProps{
  handleDeleteCustomer: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleDeleteCustomer }) => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <FiArrowLeft size={20} />
          <span>Go Back</span>
        </Link>
        <button onClick={handleDeleteCustomer} type="button">Delete Customer</button>
      </Content>
    </Container>
  );
};

export default Header;
