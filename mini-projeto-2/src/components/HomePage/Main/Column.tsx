import {
  ColumnBackground,
  StyledColumnTitle,
} from "../../../styles/Home/Column";

interface ColumnProps {
  title: string;
}

const Column = ({ title }: ColumnProps) => (
  <>
    <ColumnBackground>
      <StyledColumnTitle>{title}</StyledColumnTitle>
    </ColumnBackground>
  </>
);

export default Column;
