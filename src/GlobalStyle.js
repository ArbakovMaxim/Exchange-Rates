import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
  display: none;
}
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul{
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

`;
