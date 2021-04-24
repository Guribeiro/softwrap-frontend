import styled, { css } from 'styled-components';

import { colors } from '../../styles/global';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${colors.white};
  border: 1px solid #BABABA;
  padding: 1.2rem;
  width: 100%;
  margin-bottom: .6rem;
  border-radius: 10px;
  color: ${colors.placeholder};
  display: flex;

  ${(props) => props.isFocused
    && css`
      border-color: ${colors.button};
    `}

  ${(props) => props.isFilled
    && css`
      color: ${colors.button};
  `}

  input {
    background: transparent;
    line-height: 2rem;
    border: 0;
    flex: 1;
    color: ${colors.placeholder};
    &::placeholder {
      color: ${colors.placeholder};
    }

  }
  svg {
    margin-right: 16px;
  }
`;
