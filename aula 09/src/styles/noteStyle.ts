import {styled} from "styled-components"

export const BoxContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const NotificationContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 15px;
`;

export const ErrorNotification = styled(NotificationContainer)`
  background-color: red;
`;

export const WarningNotification = styled(NotificationContainer)`
  background-color: blue;
`;

export const InfoNotification = styled(NotificationContainer)`
  background-color: plum;
`;