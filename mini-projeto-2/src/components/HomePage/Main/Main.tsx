import { ColumnsContainer } from "../../../styles/Home/Column";
import Column from "./Column";
import Kanban from "./Kanban";

const Main = () => {
  return (
    <>
      <ColumnsContainer>
        <Column title="New" />
        <Column title="To Do" />
        <Column title="Doing" />
        <Column title="Done" />
      </ColumnsContainer>
      <Kanban />
    </>
  );
};

export default Main;
