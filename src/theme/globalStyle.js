import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;

    background-color: transparent;
  }

  body {
    font-family: 'Recursive', sans-serif;

    background-color: #FB6B6B;
  }
`;
 
export default GlobalStyle;