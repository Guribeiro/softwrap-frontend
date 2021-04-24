import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 660px){
    flex-direction: column;
  }
`;
