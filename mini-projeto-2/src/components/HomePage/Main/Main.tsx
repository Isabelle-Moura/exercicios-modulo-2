import { ColumnsContainer } from "../../../styles/Home/Column";
import Column from "./Column";
import Kanban from "./Kanban";
import NewColumn from "./NewColumn";

const Main = () => {
  return (
    <>
      <ColumnsContainer>
        <NewColumn />
        <Column title="To Do" />
        <Column title="Doing" />
        <Column title="Done" />
      </ColumnsContainer>
      <Kanban />
    </>
  );
};

export default Main;
