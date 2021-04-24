import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { shade } from 'polished';
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

  align-items: center;

  border: 1px solid ${colors.stroke};

  border-radius: 10px;

  h1{
    color: ${colors.title};
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  > a{
    color: #38577B;
    display: block;
    text-align: center;
    &:hover{
      color: ${shade(0.5, '#38577B')};
    }
  }

`;
