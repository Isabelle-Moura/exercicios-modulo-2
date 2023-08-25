import { styled } from "styled-components";

export const ListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ItemContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500; 
  font-size: 20px;
  width: 80%;
  padding: 20px;
`;

export const TaskItem = styled(ItemContainer)`
  background-color: blueviolet;
`;

export const EventItem = styled(ItemContainer)`
  background-color: greenyellow;
`;

export const ReminderItem = styled(ItemContainer)`
  background-color: tomato;
`;