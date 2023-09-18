import {
  ColumnBackground,
  StyledColumnTitle,
} from "../../../styles/Home/Column";

interface ColumnProps {
  title: string;
  column: Column;
}

const Column = ({ title, column }: ColumnProps) => (
  <>
    <ColumnBackground id={column}>
      <StyledColumnTitle>{title}</StyledColumnTitle>
    </ColumnBackground>
  </>
);

export default Column;
