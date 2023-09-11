import styled from "styled-components";

export const ResponseContainer = styled.div`
  .container {
    border: 1px solid #6950A1;
    padding: 30px;
    margin: 70px auto;
    max-width: 920px;
    width: 800px;
    border-radius: 6px;
  }

  .div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .question {
    padding: 5px;
    margin: 30px auto;
    width: 90%;
    font-weight: 600;
    font-weight: bold; /* Texto em negrito */
  }

  .answer {
    font-weight: 400;
  }

  .input-radio {
    width: 100%;
    text-align: center;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    flex-direction: row;
    margin: 0px 15px;
  }

  .input-radio input {
    margin: 5px 25px; /* Espaçamento entre os radio buttons */
  }

  .button {
    cursor: pointer;
    font-weight: 700;
    width: 227px;
    height: 49px;
    border: 0;
    background: #6950A1;
    color: #fff;
    border-radius: 1.5rem;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px; /* Espaçamento entre os botões e a pergunta */
  }
`;
