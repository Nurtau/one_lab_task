import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    background-color: rgba(49, 65, 100);
    color: white;
    font-size: calc(15px + 0.6vw);
    font-family: 'Noto Sans Display', sans-serif;
    h3 {
      font-size: calc(20px + 0.7vw);
    }
  }
`;
