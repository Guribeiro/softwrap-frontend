import React from 'react';

import { Container } from './styles';

const Row:React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Row;
