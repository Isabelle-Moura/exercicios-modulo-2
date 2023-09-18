import { ColumnsContainer } from "../../../styles/Home/Column";
import Column from "./Column";
import Kanban from "./Kanban";
import NewColumn from "./NewColumn";

const Main = () => {
  return (
    <>
      <ColumnsContainer>
        <NewColumn />
        <Column column="TODO" title="To Do" />
        <Column column="DOING" title="Doing" />
        <Column column="DONE" title="Done" />
        <Kanban />
      </ColumnsContainer>
    </>
  );
};

export default Main;
