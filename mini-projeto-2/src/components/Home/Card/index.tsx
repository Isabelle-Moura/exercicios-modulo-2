import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./style";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { deleteCard, updateCard } from "../../../services/card-service";
import { useCards } from "../../../context/CardContext";
import { useState } from "react";
import Modal from "../Modal";
import EditCard from "../EditCard";

interface Props {
  card: Card;
}

const Card = ({ card }: Props) => {
  const { setCards } = useCards();
  const [showEdit, setShowEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeCard = () => {
    setShowEdit(false);
  };
  const openCard = () => {
    setShowEdit(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  const confirmModal = async () => {
    try {
      const response = await deleteCard(card._id);
      setCards(response);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const updateCardPosition = async (card: Card, position: "left" | "right") => {
    let column = card.column;

    if (["TODO", "DONE"].includes(column)) {
      column = "DOING";
    } else if (position === "left") {
      column = "TODO";
    } else {
      column = "DONE";
    }

    const data: UpdateCard = {
      ...card,
      column,
    };

    try {
      const response = await updateCard(card._id, data);
      setCards(response);
    } catch (error) {
      console.error(error);
    }
  };

  const moveToLeft = (card: Card) => {
    updateCardPosition(card, "left");
  };

  const moveToRight = (card: Card) => {
    updateCardPosition(card, "right");
  };

  return (
    <>
      {showEdit === true ? (
        <EditCard card={card} closeCard={closeCard} />
      ) : (
        <S.CardBackground>
          <S.TitleAndEdit>
            <S.CardTitle>{card.title}</S.CardTitle>
            <S.CardButtons onClick={openCard}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="xl"
                style={{ color: "#3a78f8" }}
              />
            </S.CardButtons>
          </S.TitleAndEdit>
          <S.CardDescription>{card.content}</S.CardDescription>

          <S.ButtonsContainer>
            {card.column !== "TODO" && (
              <S.CardButtons onClick={() => moveToLeft(card)}>
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  size="xl"
                  style={{ color: "#3a78f8" }}
                />
              </S.CardButtons>
            )}
            {showModal === true && (
              <Modal closeModal={closeModal} openModal={confirmModal} />
            )}
            <S.CardButtons onClick={openModal}>
              <FontAwesomeIcon
                icon={faTrashCan}
                size="xl"
                style={{ color: "#3a78f8" }}
              />
            </S.CardButtons>
            {card.column !== "DONE" && (
              <S.CardButtons onClick={() => moveToRight(card)}>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  size="xl"
                  style={{ color: "#3a78f8" }}
                />
              </S.CardButtons>
            )}
          </S.ButtonsContainer>
        </S.CardBackground>
      )}
    </>
  );
};
export default Card;
