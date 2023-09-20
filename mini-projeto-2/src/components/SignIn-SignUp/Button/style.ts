import styled from "styled-components";

export const StyledButton = styled.button<{variant: 'MAIN' | 'SECONDARY'}>`
  margin: 10px 98px;
  padding: 10px;
  width: 120px;
  color: ${({theme, variant}) => variant === 'MAIN' ? theme.colors.white : theme.colors.lightBlue} ;
  font-weight: 800;
  background-color: ${({theme, variant}) => variant === 'MAIN' ? theme.colors.darkBlue : theme.colors.white};
  border-radius: 10px;
  cursor: pointer;
  border-color: ${({ theme, variant }) =>
    variant === "MAIN" ? "none" : theme.colors.darkBlue};
  cursor: pointer;

  &:disabled {
    background-color: gray;
    color: black;
    cursor: not-allowed;
  }

`