import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;

  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    
    --webkit-font-smoothing: antialiased;
    background:#ccc;
    /* background-image: linear-gradient(to bottom right, #faa61b, #f7ec32); */
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
