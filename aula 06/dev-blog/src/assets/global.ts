import { createGlobalStyle, styled } from "styled-components";

export default createGlobalStyle`
   *,
  *::after,
  *::before {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  padding: 15px;
`;
