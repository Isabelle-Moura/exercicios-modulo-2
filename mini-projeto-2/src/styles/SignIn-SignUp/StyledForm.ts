import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start;
`

export const StyledLabel = styled.label`
  color: #fff;
  font-weight: 300;
  margin: 5px 15px ;
`

export const StyledInput = styled.input`
  margin: 5px 10px;
  color: #1f3f89;
  width: 280px;
  height: 30px;
  border-radius: 16px;
  border: 1px solid #fff;
  padding: 5px 15px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
`

export const StyledButton = styled.button`
  margin: 10px 98px;
  padding: 10px;
  width: 120px;
  color: #fff;
  font-weight: 800;
  background-color: #0A2668;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`