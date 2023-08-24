import { styled } from "styled-components";

// Estilos usando Styled Components
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  width: 500px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  width: 500px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
