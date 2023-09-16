import { ColumnsContainer } from "../../../styles/Home/Column";
import Column from "./Column";

const Main = () => {
  return (
    <>
      <ColumnsContainer>
        <Column currColumn="NEW" columnTitle="New" />
        <Column currColumn="TODO" columnTitle="To Do" />
        <Column currColumn="DOING" columnTitle="Doing" />
        <Column currColumn="DONE" columnTitle="Done" />
      </ColumnsContainer>
    </>
  );
};

export default Main;
