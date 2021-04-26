import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Container = styled.div`
        margin-top: 4rem;
        border: 1px solid red;
        padding: 4.2rem 4.8rem;
        background-color: ${colors.container};
        border-radius: 10px;
        border: 1px solid ${colors.stroke};
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
          color: #455280;
          padding: 1rem 2rem;
          line-height: 1.5rem;
          text-align: left;
          border-radius: 10px;
          font-weight: 500;
          font-size: 1.2rem;
        }

        td{
          padding: 1rem 2rem;
          font-size: 1.1rem;
          border:0;
          background-color: #fff;
          color: #969CB2;
          border-radius: calc(1rem / 4);

          &:first-child{
              color: #363F5F;
          }
        }
    }
`;
