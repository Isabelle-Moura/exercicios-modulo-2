import { useState, FormEvent } from "react";
import { useCards } from "../../../context/CardContext";
import { updateCard } from "../../../services/card-service";
import * as S from "../Card/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

type Props = {
  card: Card;
  closeCard: () => void;
};

const EditCard = ({ card, closeCard }: Props) => {
  const [title, setTitle] = useState(card.title);
  const [content, setContent] = useState(card.content);

  const { setCards } = useCards();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await updateCard(card._id, {
        column: card.column,
        title,
        content,
      });
      setCards(response);
      closeCard();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.FormNewCard onSubmit={handleSubmit}>
        <S.CardBackground>
          <S.NewInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <S.ButtonsContainer>
            <S.CardButtons onClick={closeCard}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                size="xl"
                style={{ color: "#3a72f8" }}
              />
            </S.CardButtons>
            <S.CardButtons type="submit">
              <FontAwesomeIcon
                icon={faFloppyDisk}
                size="xl"
                style={{ color: "#3a72f8" }}
              />
            </S.CardButtons>
          </S.ButtonsContainer>
        </S.CardBackground>
      </S.FormNewCard>
    </>
  );
};

export default EditCard;
