import {
  ColumnBackground,
  StyledColumnTitle,
} from "../../../styles/Home/Column";
import Card from "./Card";

const Column = ({ columnTitle, currColumn }: ColumnProps) => (
  <>
    <ColumnBackground id={currColumn}>
      <div>
        <StyledColumnTitle>{columnTitle}</StyledColumnTitle>
      </div>
      <div>
        {currColumn === "NEW" ? (
          <Card placeholderInput="Título" placeholderTextArea="Conteúdo" />
        ) : null}
        {currColumn === "TODO" ||
        currColumn === "DOING" ||
        currColumn === "DONE" ? (
          <Card
            cardTitle="Lorem Ipsum"
            cardDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem temporibus perferendis."
          />
        ) : null}
      </div>
    </ColumnBackground>
  </>
);

export default Column;
