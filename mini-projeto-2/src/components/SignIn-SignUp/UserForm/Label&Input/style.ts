import styled from "styled-components"

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  margin: 5px 15px ;
`

export const StyledInput = styled.input`
  margin: 5px 10px;
  color: ${({ theme }) => theme.colors.midBlue};
  width: 280px;
  height: 30px;
  border-radius: 16px;
  border: 1px solid #fff;
  padding: 5px 15px;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
`