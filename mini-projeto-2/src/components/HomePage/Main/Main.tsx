import { ColumnsContainer } from "../../../styles/Home/Column";
import Column from "./Column";

const Main = () => {
  return (
    <>
      <ColumnsContainer>
        <Column columnTitle="New" />
        <Column
          columnTitle="To Do"
          cardTitle="Lorem Ipsum"
          cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat saepe iure iure numquam aliquam.
"
        />
        <Column
          columnTitle="Doing"
          cardTitle="Lorem Ipsum"
          cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat saepe iure iure numquam aliquam.
"
        />
        <Column
          columnTitle="Done"
          cardTitle="Lorem Ipsum"
          cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat saepe iure iure numquam aliquam.
"
        />
      </ColumnsContainer>
    </>
  );
};

export default Main;
