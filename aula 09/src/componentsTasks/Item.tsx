import { TaskItem } from "../styles/tasksStyle";
import { EventItem } from "../styles/tasksStyle";
import { ReminderItem } from "../styles/tasksStyle";

interface Props {
  item: ItemType;
}

const Item = ({ item }: Props) => {
  if (item.type === "task") {
    return (
      <>
        <TaskItem>
          <h3>Tarefa</h3>
          <div>Descrição: {item.description}</div>
          <div>Foi concluída?: {item.concluded ? "Sim :)" : "Não :("}</div>
        </TaskItem>
      </>
    );
  }
  if (item.type === "event") {
    return (
      <>
        <EventItem>
          <h3>Evento</h3>
          <div>Nome: {item.name}</div>
          <div>Data: {item.date}</div>
        </EventItem>
      </>
    );
  }
  if (item.type === "reminder") {
    return (
      <>
        <ReminderItem>
          <h3>Lembrete</h3>
          <div>Não esquecer: {item.text}</div>
        </ReminderItem>
      </>
    );
  }
  return null;
};

export default Item;
