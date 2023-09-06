import { styled } from "styled-components";

export const Menu = styled.nav`
  display: flex;
  background-color: blueviolet;
  
  > a {
    color: #fff;
    padding: .5rem 1rem;
    margin: 0 .5rem;
    text-decoration: none;

    &:hover {
      background-color: violet;
    }

  }
`