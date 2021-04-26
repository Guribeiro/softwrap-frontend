import styled from 'styled-components';
import { colors } from '../../../../styles/global';

export const Container = styled.header`
    background-color: ${colors.white};
`;

export const Content = styled.div`
    max-width: 1260px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2.5rem 0;

    a{
      display: flex;
      align-items: center;

      transition: filter 0.2s;
      color: ${colors.text};

      span{
        margin-left: 1rem;
        transition: border-bottom .2s;
        border-bottom: 2px solid transparent;
      }

      &:hover{
          filter: brightness(0.8);

          span{
            border-bottom: 2px solid ${colors.text};
          }
      }


    }

    button{
      font-weight: 500;
      color: ${colors.white};
      background-color: ${colors.signout_button};
      padding: 1.4rem 3rem;
      border: 0;
      border-radius: 5px;
      transition: filter 0.2s;

      &:hover{
          filter: brightness(0.9);
      }
    }
`;

export const SignOutButton = styled.button`
  margin-left: 6rem;
  font-weight: 500;
  color: ${colors.white};
  background-color: ${colors.signout_button};
  padding: 1.4rem 2rem;
  border: 0;
  border-radius: 5px;
  transition: filter 0.2s;

  &:hover{
      filter: brightness(0.9);
  }
`;
