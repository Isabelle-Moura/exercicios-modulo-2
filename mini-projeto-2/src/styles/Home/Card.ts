import styled from "styled-components";

export const CardBackground = styled.div`
  background-color: #f8f8f8;
  width: 210px; 
  height: 180px;
  margin: 10px; 
  padding: 15px;
  border-radius: 15px;
  box-shadow: 3px 2px 5px #b2b2b2;
`

export const CardTitle = styled.h3`
  font-weight: 900;
  color: #6b6b6b;
  margin: 1px 25px 0px 3px;
`

export const CardDescription = styled.p`
  font-weight: 400;
  color: #575757;
  max-width: 250px; 
  font-size: 15px;
`

export const TitleAndEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardButtons = styled.button`
  border: none;
  cursor: pointer;
  background-color: #f8f8f8;
`

export const ButtonsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;  
` 

export const FormNewCard = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NewInput = styled.input`
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
  color: #6b6b6b;
  width: 180px;   
  height: 30px;
  border: 1px solid #575757;
  border-radius: 20px;
  outline: none;
  padding: 0px 15px;
  margin-bottom: 5px;
  `

export const TextArea = styled.textarea`
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #575757;
  border: 1px solid #575757;
  font-weight: 400;
  outline: none;
  width: 180px; 
  height: 100px; 
  resize: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin-bottom: 5px;
`