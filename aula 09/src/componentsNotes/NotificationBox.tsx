import Notification from "./Notification";
import { NotificationContainer } from "../styles/noteStyle";

interface Props {
  notifications: Notifications[];
}

const NotificationBox = ({ notifications }: Props) => {
  return (
    <NotificationContainer>
      {notifications.map((notification, index) => (
        <Notification notification={notification} key={index} />
      ))}
    </NotificationContainer>
  );
};

export default NotificationBox;
