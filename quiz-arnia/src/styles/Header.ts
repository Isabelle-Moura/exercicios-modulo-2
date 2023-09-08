import { styled } from "styled-components";

export const Logo = styled.img`
  width: 150px;
  margin: 1px;
`

export const HeaderBackground = styled.header`
  background-color: #6950a1;
  padding: 2rem;
  width: auto;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `
export const Nav = styled.nav`
   a {
    cursor: pointer;
    list-style: none;
    color: #fff;
    font-weight: 600;
    margin-left: 20px; 
    text-decoration: none;
    }
`