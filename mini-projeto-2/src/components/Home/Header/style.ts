import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: #3A72F8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;

  .user-and-link{
    display: flex;
    align-items: center;
  }
`

export const StyledH1 = styled.h1`
  color: #fff;
  margin-left: 20px;
`

export const StyledUserName = styled.h2`
  color: #fff;
  margin-right: 20px;
`

export const StyledLink = styled(Link)`
  color: #fff;
  margin: 0px 15px;
`