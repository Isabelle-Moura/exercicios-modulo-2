import { ColumnsContainer } from "../../../styles/Home/Column";
import Column from "./Column";

const Main = () => {
  return (
    <>
      <ColumnsContainer>
        <Column columnTitle="New" />
        <Column
          columnTitle="To Do"
          cardTitle="Projeto Mód. II"
          cardDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, dolore!"
        />
        <Column
          columnTitle="Doing"
          cardTitle="Kanban Arnia"
          cardDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, dolore!"
        />
        <Column
          columnTitle="Done"
          cardTitle="Ler Harry Potter"
          cardDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, dolore!"
        />
      </ColumnsContainer>
    </>
  );
};

export default Main;
