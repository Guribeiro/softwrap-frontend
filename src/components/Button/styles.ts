import styled from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles/global';

export const ButtonStyled = styled.button`
  display: block;
  width: 100%;
  background-color: ${colors.button};
  color: ${colors.white};
  padding: 1.2rem;
  border: none;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 1.6rem;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${shade(0.2, colors.button)};
  }
`;
