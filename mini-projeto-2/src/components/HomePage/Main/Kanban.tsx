import { useEffect, useState } from "react";
import { deleteCard, getAllCards } from "../../../services/card-service";
import Cards from "./Card";

const Kanban = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const allCards = await getAllCards();
      if (allCards) {
        const cardProps = allCards.map((card) => ({
          cardTitle: card.title,
          cardDescription: card.content,
          onClick: () => handleDeleteCard(card._id),
        }));
        setCards(cardProps);
      }
    };

    fetchCards();
  }, []);

  const handleDeleteCard = async (cardId: string) => {
    try {
      await deleteCard(cardId);
      const updatedCards = cards.filter((card) => card._id !== cardId);
      setCards(updatedCards);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {cards.map((card) => (
        <Cards key={card._id} title={card.title} cards={cards} />
      ))}
    </>
  );
};

export default Kanban;
