import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

import { colors } from '../../styles/global';

export const Container = styled.main`
    max-width:1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
`;

export const Form = styled(Unform)`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1{
        font-size: 2.5rem;
        color: ${colors.title};
        font-weight: 600;
        margin-bottom: 2.5rem;
    }

    div{
      max-width: 620px;
      width: 100%;
    }

    button[type='submit']{
        width: 50%;
        align-self: center;
        margin-top: 4rem;
        align-items: center;
        font-size: 1.6rem;
        padding: 1.2rem 0;
        color: #fff;
        font-weight: 500;
        background-color: ${colors.button};
        border: 0;
        border-radius: 5px;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }

        @media(max-width: 660px){
          width: 100%;
        }
    }

`;
