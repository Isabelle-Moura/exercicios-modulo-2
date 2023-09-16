import { useEffect, useState } from "react";
import { DeleteCard, GetCards } from "../../../services/card";
import Card from "./Card";

const Kanban = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const allCards = await GetCards();
      if (allCards) {
        const cardProps = allCards.map((card) => ({
          cardTitle: card.title,
          cardDescription: card.content,
          onClick: () => handleDelete(card._id),
        }));
        setCards(cardProps);
      }
    };

    fetchCards();
  }, []);

  const handleDelete = async (id: string) => {
    const newCards = await DeleteCard(id);
    if (newCards) {
      setCards(newCards);
    }
  };

  return (
    <>
      {cards.map((card, index) => (
        <Card
          key={index}
          cardTitle={card.cardTitle}
          cardDescription={card.cardDescription}
          onClick={() => handleDelete(card._id)}
        />
      ))}
    </>
  );
};

export default Kanban;
