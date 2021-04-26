import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import NewCustomerModal from '../../components/NewCustomerModal';
import CustomersTable from '../../components/CustomersTable';
import Pagination from '../../components/Pagination';

import { Container } from './styles';

interface Customer {
  id: string;
  name: string;
  age: number;
  marital_status: string;
  cpf: string;
  city: string;
  state: string;
}

const Dashboard: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [page, setPage] = useState(1);

  const { user } = useAuth();

  useEffect(() => {
    api.get('/customers', {
      params: {
        page,
      },
    }).then((response) => setCustomers(response.data));
  }, [page]);

  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false);

  const handleOpenNewCustomerModal = useCallback(() => {
    setIsNewCustomerModalOpen(true);
  }, []);

  const handleCloseNewCustomerModal = useCallback(() => {
    setIsNewCustomerModalOpen(false);
  }, []);

  const handlePreviousPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  return (
    <Container>
      <Header onOpenNewCustomerModal={handleOpenNewCustomerModal} />
      <NewCustomerModal
        isOpen={isNewCustomerModalOpen}
        onRequestClose={handleCloseNewCustomerModal}
      />
      <CustomersTable
        customers={customers}
      />
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        page={page}
      />
    </Container>
  );
};

export default Dashboard;
