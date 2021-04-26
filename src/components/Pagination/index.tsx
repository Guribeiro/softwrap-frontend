import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container } from './styles';

interface PaginationProps{
  page: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const Pagination:React.FC<PaginationProps> = ({ page, handleNextPage, handlePreviousPage }) => (
  <Container>
    <button disabled={page < 2} onClick={handlePreviousPage} type="button">
      <FiArrowLeft size={20} color="#00B7F8" />
    </button>
    <span>
      {page}
    </span>
    <button onClick={handleNextPage} type="button">
      <FiArrowRight size={20} color="#00B7F8" />
    </button>
  </Container>
);

export default Pagination;
