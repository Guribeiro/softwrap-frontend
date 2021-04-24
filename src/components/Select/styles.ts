import styled, { css } from 'styled-components';

import { colors } from '../../styles/global';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.section<ContainerProps>`
  position: relative;

   select{
    background: ${colors.white};
    border: 1px solid #BABABA;
    padding: 1.2rem;
    margin-bottom: .6rem;
    border-radius: 10px;
    color: ${colors.placeholder};
    font-size: 1.4rem;
    width: 100%;

    ${({ isFilled }) => isFilled && css`
      border-color: ${colors.button};
    `}
    ${({ isFocused }) => isFocused && css`
      border-color: ${colors.button};
    `}

    > option{
      font-size: 1.4rem;
      padding: 1.2rem;
    }
   }
`;
