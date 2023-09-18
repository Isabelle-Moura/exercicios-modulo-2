import { Dispatch, SetStateAction, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ColumnBackground,
  StyledColumnTitle,
} from "../../../styles/Home/Column";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "../../../styles/Home/Card";
import { updateCardService } from "../../../services/card-service";

type Props = {
  title: string;
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>; // Adicione setCards às props
};

export default function Cards({ title, cards, setCards }: Props) {
  const [editedCard, setEditedCard] = useState<Card | null>(null);

  const updateTheCard = async (card: Card, position: "left" | "right") => {
    if (editedCard) {
      const column =
        card.column === "TODO" || card.column === "DONE"
          ? "DOING"
          : position === "left"
          ? "TODO"
          : "DONE";

      const response = await updateCardService({
        ...card,
        column,
      });

      setCards((prevCards) =>
        prevCards.map((prevCard) =>
          prevCard._id === card._id ? response : prevCard
        )
      );
    }
  };

  const handleEditButton = async () => {
    if (editedCard) {
      const updatedCard = {
        ...editedCard,
      };

      const response = await updateCardService(updatedCard);

      const updatedCards = cards.map((card) =>
        card._id === updatedCard._id ? response : card
      );

      // Atualize o estado editedCard
      setEditedCard(null); // Defina como null para indicar que a edição foi concluída

      // Atualize o estado cards
      setCards(updatedCards);
    }
  };

  return (
    <ColumnBackground>
      <StyledColumnTitle>{title}</StyledColumnTitle>
      <div>
        {cards.map((card) => (
          <S.CardBackground key={card._id}>
            <div>
              <S.TitleAndEdit>
                <S.CardTitle>{card.title}</S.CardTitle>
                <S.CardButtons onClick={() => handleEditButton()}>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="xl"
                    style={{ color: "#3a72f8" }}
                  />
                </S.CardButtons>
              </S.TitleAndEdit>
              <S.CardDescription>{card.content}</S.CardDescription>
              <S.ButtonsContainer>
                {card.column !== "TODO" && (
                  <S.CardButtons onClick={() => updateTheCard(card, "left")}>
                    <FontAwesomeIcon
                      icon={faCircleArrowLeft}
                      size="xl"
                      style={{ color: "#3a72f8" }}
                    />
                  </S.CardButtons>
                )}
                <S.CardButtons>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size="xl"
                    style={{ color: "#3a72f8" }}
                  />
                </S.CardButtons>
                {card.column !== "DONE" && (
                  <S.CardButtons onClick={() => updateTheCard(card, "right")}>
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      size="xl"
                      style={{ color: "#3a72f8" }}
                    />
                  </S.CardButtons>
                )}
              </S.ButtonsContainer>
            </div>
          </S.CardBackground>
        ))}
      </div>
    </ColumnBackground>
  );
}
