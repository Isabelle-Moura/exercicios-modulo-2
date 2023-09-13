import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  background-color: #3A72F8;
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
  color: #fff;
  margin: 10px 106px;
`