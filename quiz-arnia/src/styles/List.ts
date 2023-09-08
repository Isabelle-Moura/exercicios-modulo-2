import { styled } from "styled-components";

export const QuestionContainer = styled.div`

li {
    border: 1px solid #6950A1;
    padding: 5px;
    margin: 30px auto;
    width: 90%;
    border-radius: 6px;
    font-weight: 600;
  }

  .div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
      width: 65rem;
      height: 35px;
      border: 1px solid #a0a0a0;
      border-radius: 7px;
      padding: 0 .5rem;
      margin-top: 5px;
      margin-bottom: 5px;
  }

  button {
    margin-left: 5px;
    cursor: pointer;
    font-weight: 700;
    width: 100px;
    height: 40px;
    border: 0;
    background: #6950A1;
    color: #fff;
    border-radius: 1.5rem;
  }

  .buttons {
    display: flex;
    flex-direction: row-reverse;
  }
`