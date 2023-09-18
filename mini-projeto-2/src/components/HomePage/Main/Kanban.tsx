import Cards from "./Cards";
import { useEffect, useState } from "react";
import { getAllCards } from "../../../services/card-service";

const Kanban = () => {
  const [allCards, setAllCards] = useState<Card[]>([]);

  useEffect(() => {
    getAllCards().then((res) => {
      setAllCards(res);
    });
  }, []);

  return (
    <div>
      {allCards.map((card) => (
        <Cards
          key={card._id}
          cards={allCards}
          setCards={setAllCards}
          title=""
        />
      ))}
    </div>
  );
};

export default Kanban;
