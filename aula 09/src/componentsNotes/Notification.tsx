import { ErrorNotification } from "../styles/noteStyle";
import { WarningNotification } from "../styles/noteStyle";
import { InfoNotification } from "../styles/noteStyle";

interface Props {
  notification: Notifications;
}

const Notification = ({ notification }: Props) => {
  if (notification.type === "error") {
    return (
      <>
        <ErrorNotification>{notification.message}</ErrorNotification>
      </>
    );
  }
  if (notification.type === "warning") {
    return (
      <>
        <WarningNotification>{notification.message}</WarningNotification>
      </>
    );
  }
  if (notification.type === "info") {
    return (
      <>
        <InfoNotification>{notification.message}</InfoNotification>
      </>
    );
  }
};

export default Notification;
