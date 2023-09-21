import styled from "styled-components";

export const ExternalBoxModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed; 
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const BoxModal = styled.div`
  z-index: 11;
  position: relative;
  width: 400px;
  padding: 1rem;
  background: #fff;
  border: 2px solid #069;
  border-radius: 8px;
  box-shadow: 4px 4px 4px #676767;
`;

export const ModalTitle = styled.h3`
  color: #575757;
  margin-left: 12px;
  font-weight: 700;
`

export const ButtonsModal = styled.button<{variant: 'MAIN' | 'SECONDARY'}>`
  padding: 10px;
  min-width: 120px;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`