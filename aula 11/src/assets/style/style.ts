import styled from "styled-components";

export const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
` 

export const Table = styled.table`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  margin: 0px 10px 20px 0px;

  td {
    background-color: honeydew;
    border: 1px solid #ddd;
    padding: 8px;
    font-weight: 600;
    text-align: left;
}

th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    background-color: blueviolet;
    color: #fff;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: sienna;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 0px 10px 20px 0px;
  border-radius: 5px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
export const LoadingMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: red;
`;

export const AppWrapper = styled.div`
  padding: 20px;
`;

export const TableWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
