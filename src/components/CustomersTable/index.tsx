import React, { useEffect, useState, useCallback } from 'react';
import { FiEdit } from 'react-icons/fi';

import { Link } from 'react-router-dom';

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

interface CustomersTableProps {
  customers: Customer[]
}

const CustomersTable: React.FC<CustomersTableProps> = ({ customers }) => {
  const [isEditCustomerModalOpen, setIsEditCustomerModalOpen] = useState(false);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Marital Status</th>
            <th>CPF</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.age}</td>
              <td>{customer.marital_status}</td>
              <td>{customer.cpf}</td>
              <td>{customer.city}</td>
              <td>{customer.state}</td>
              <td>
                <Link to={{
                  pathname: `/customers/${customer.id}`,
                  state: { customer_id: customer.id },
                }}
                >
                  <FiEdit color="#00B7F8" />
                </Link>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

    </Container>
  );
};

export default CustomersTable;
