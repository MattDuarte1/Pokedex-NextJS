import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #424242;
    background-image: url('/images/body_bg.png');
  }

  button {
    cursor:pointer;
  }

  a {
    text-decoration: none;
    color: white;
  }

  `;