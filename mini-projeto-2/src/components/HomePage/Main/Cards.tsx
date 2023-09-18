import { Dispatch, SetStateAction } from "react";
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
import { deleteCard, updateCardService } from "../../../services/card-service";

type Props = {
  title: string;
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
};

export default function Cards({ title, cards, setCards }: Props) {
  const updateTheCard = async (card: Card, position: "left" | "right") => {
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

    setCards(response);
  };

  const handleEditButton = async () => {};

  const handleDeleteButton = async (cardId: string) => {
    await deleteCard(cardId).then((response) => console.log(response));
    setCards(cards.filter((card) => card._id !== cardId));
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
                <S.CardButtons onClick={handleEditButton}>
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
                <S.CardButtons onClick={() => handleDeleteButton(card._id)}>
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
