import styled, { css } from 'styled-components';

import InputMask from 'react-input-mask';
import { colors } from '../../styles/global';

export const Input = styled(InputMask)`
  background: transparent;
  line-height: 2rem;
  border: 0;
  color: ${colors.input};
  &::placeholder {
    color: ${colors.placeholder};
  }
`;

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
`;
