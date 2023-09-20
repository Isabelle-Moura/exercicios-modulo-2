import { useCards } from "../../../context/CardContext";
import Card from "../Card";
import { ColumnBackground, StyledColumnTitle } from "../Column/style";

type Props = {
  type: Column;
  title: string;
};

export default function Cards({ type, title }: Props) {
  const { cards } = useCards();

  return (
    <ColumnBackground>
      <StyledColumnTitle>{title}</StyledColumnTitle>

      {cards
        .filter((card) => card.column === type)
        .map((card) => (
          <Card key={card._id} card={card} />
        ))}
    </ColumnBackground>
  );
}
