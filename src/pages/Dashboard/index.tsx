import React, { useState, useCallback } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import NewCustomerModal from '../../components/NewCustomerModal';

const Dashboard:React.FC = () => {
  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false);

  const handleOpenNewCustomerModal = useCallback(() => {
    setIsNewCustomerModalOpen(true);
  }, []);

  const handleCloseNewCustomerModal = useCallback(() => {
    setIsNewCustomerModalOpen(false);
  }, []);
  return (
    <Container>
      <Header onOpenNewCustomerModal={handleOpenNewCustomerModal} />
      <NewCustomerModal
        isOpen={isNewCustomerModalOpen}
        onRequestClose={handleCloseNewCustomerModal}
      />

    </Container>
  );
};

export default Dashboard;
