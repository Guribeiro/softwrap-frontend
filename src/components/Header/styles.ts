import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Container = styled.header`
    background-color: ${colors.white};
`;

export const Content = styled.div`
    max-width: 1260px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2.5rem 0 5rem;

    img{
      width: 20rem;
      height: 5.5rem;
    }

    button{
        font-weight: 600;
        color: ${colors.white};
        background-color: ${colors.button};
        padding: 1.4rem 3rem;
        border: 0;
        border-radius: 5px;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;
