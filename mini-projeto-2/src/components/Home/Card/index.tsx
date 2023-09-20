// import { useCards } from "../../../context/CardContext";

type Props = {
  card: Card;
};

export default function Card({ card }: Props) {
  // const { setCards } = useCards();

  return (
    <>
      <h3>{card.title}</h3>
      <p>{card.content}</p>
      <button>esquerda</button>
      <button>excluir</button>
      <button>direita</button>
    </>
  );
}
