import { styled } from "styled-components";

export const FormContainer = styled.div`
  width: 300px;
  height: 450px;
  margin-right: 20px;
  position: absolute;
  border: 2px solid #6950A1;
  border-radius: 20px;
  top: 100px;
  right: 150px;
  `

export const FormHeader = styled.div`
  width: 255px;
  color: #fff;
  background-color: #1A1033E5;
  font-weight: 600;
  font-size: 15px;
  padding: 20px; 
  align-items: center;
  border-radius: 15px;
  box-shadow: 20px;
  border: 3px solid #1A1033E5;
  margin-bottom: 15px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px 10px;
`

export const FormLabel = styled.label`
  font-weight: 300;
  font-size: 15px;
`

export const FormInput = styled.input`
  width: 270px; 
  height: 30px;
  border: 1px solid #6950A1;
  border-radius: 10px;
  color: #6950A1;
  padding: 2px 5px;
  `

export const FormButton = styled.button`
  margin: 15px 10px 0px 10px;
  width: 260px; 
  height: 35px;
  background-color: #6950A1;
  border: 1px solid #6950A1;
  border-radius: 15px;
  font-weight: 800;
  color: #fff; 
  cursor: pointer;
`