import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
  }
`;
