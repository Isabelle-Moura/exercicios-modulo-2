import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start;
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 550px;
  margin: 35px 480px 0px 480px;
  border-radius: 20px;
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  margin: 10px 106px;
`

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0px;
`

export const StyledSubTitle = styled.h3`
    padding: 1px;
    color: ${({ theme }) => theme.colors.white};
    margin: 8px 0px;
`