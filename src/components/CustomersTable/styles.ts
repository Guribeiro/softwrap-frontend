import styled from 'styled-components';

export const Container = styled.div`
        margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: #969CB2;
            padding: 1rem 2rem;
            line-height: 1.5rem;
            text-align: left;
        }

        td{
            padding: 1rem 2rem;
            border:0;
            background-color: #ddd;
            color: #000;
            border-radius: calc(1rem / 4);

            &:first-child{
                color: var(--text-title);
            }
        }
    }
`;
