import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    padding: 0;
    border: 0;
    margin: 0;

    background-color: transparent;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Recursive', sans-serif;

    background-color: #FB6B6B;
  }
`;
 
export default GlobalStyle;