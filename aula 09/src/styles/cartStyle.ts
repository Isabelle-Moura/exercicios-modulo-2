import { styled } from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  width: 500px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

export const FisicalProductItem = styled(ItemContainer)`
  background-color: dodgerblue;
`;

export const DigitalProductItem = styled(ItemContainer)`
  background-color: burlywood;
`;