import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { colors } from '../../styles/global';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  margin: 2rem 0;
  width: 31rem;
  height: 9rem;
`;

export const Form = styled(Unform)`
  max-width: 580px;
  width: 100%;
  background-color: #F6F6F6;
  padding: 3.5rem;

  border: 1px solid ${colors.stroke};

  border-radius: 10px;


  h1{
    color: ${colors.title};
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  p{
    font-size: 1.3rem;
    color: #001C3C;
    margin-bottom: 2rem;
    font-weight: 400;
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }


`;
