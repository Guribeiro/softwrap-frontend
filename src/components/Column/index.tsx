import React from 'react';

import { Container } from './styles';

const Column:React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Column;
