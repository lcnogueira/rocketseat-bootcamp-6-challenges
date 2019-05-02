import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #9865E6;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

  button{
    cursor: pointer;
    color: #fff;
    border-radius: 3px;

    &:hover{
      opacity: 0.8;
    }
  }

  .bg-primary{
    background: #007bff;
    border: #007bff;
  }

  .bg-secondary{
    background: #63f5b8;
    border: #63f5b8;
  }

  .bg-danger{
    background: #dc3545;
    border: #dc3545;
  }

`;

export default GlobalStyle;
