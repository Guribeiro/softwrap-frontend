import { createGlobalStyle } from 'styled-components';

export const colors = {
  title: '#14375E',
  text: '#001C3C',
  placeholder: '#285383',
  input: '#285383',
  button: '#00B7F8',
  white: '#FFFFFF',
  stroke: '#BABABA',

};

export const GlobalSyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  html, body, #root{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    background: #fff;
    font-size: 1.6rem;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  button{
    background-color: transparent;
    border: 0;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    font-size: 1.4rem;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
  }


  a{
    text-decoration: none;
    color: #001C3C;
    font-size: 1.4rem;
    font-weight: 500;
    transition: .3s;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.5;
    cursor: not-allowed;
  }

  .react-modal-overlay {
        background-color: #00000050;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 1160px;
        background-color: #F0F0F0;
        padding: 5rem 3rem;
        position: relative;
        border-radius: 5px;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
    }

`;
