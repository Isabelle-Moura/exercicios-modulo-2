import { styled } from "styled-components";

export const IptRadio = styled.div`
  display: flex;
  margin-bottom: 1rem;

  .label {
    display: block;
    font-weight: 600;
    margin-top: 5px;
    margin-left: 5px;
  }


  .input {
    width: 90%;

    input {
      width: 98%;
      height: 35px;
      border: 1px solid #a0a0a0;
      border-radius: 7px;
      padding: 0 .5rem;
      margin-top: 5px;
    }
    
  }
  .radio {
    width: 10%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 5px;
    
    input {
      margin-left: 5px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`

export const Container = styled.div`
  border: 1px solid #6950A1;
  padding: 30px;
  margin: 70px auto;
  max-width: 920px;
  width: 800px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    font-weight: 600;
    margin-top: 5px;
  }

  input {
      width: 98%;
      height: 35px;
      border: 1px solid #a0a0a0;
      border-radius: 7px;
      padding: 0 .5rem;
      margin-top: 5px;
      margin-bottom: 5px;
  }

  button {
    cursor: pointer;
    font-weight: 700;
    width: 227px;
    height: 49px;
    border: 0;
    background: #6950A1;
    color: #fff;
    border-radius: 1.5rem;
    margin-left: 280px;
  }
`