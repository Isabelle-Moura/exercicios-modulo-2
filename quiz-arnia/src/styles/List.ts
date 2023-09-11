import { styled } from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    border: 1px solid #6950A1;
    padding: 5px;
    margin: 30px 0;
    width: 1200px;
    border-radius: 6px;
    font-weight: 600;
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
    justify-content: flex-end;
    margin-top: 10px;
  }
`;
