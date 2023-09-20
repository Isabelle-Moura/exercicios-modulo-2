import { useState, FormEvent } from "react";
import { useCards } from "../../../context/CardContext";
import { createCard } from "../../../services/card-service";
import { ColumnBackground, StyledColumnTitle } from "../Column/style";
import * as S from "../Card/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";

const CreateCard = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { setCards } = useCards();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await createCard({ title, content });
      setCards(response);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ColumnBackground>
      <StyledColumnTitle>New</StyledColumnTitle>
      <S.FormNewCard onSubmit={handleSubmit}>
        <S.CardBackground>
          <S.NewInput
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <S.TextArea
            placeholder="Conteúdo"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <S.CardButtons type="submit" style={{ marginLeft: "90px" }}>
            <FontAwesomeIcon
              icon={faCirclePlus}
              size="xl"
              style={{ color: "#3a72f8" }}
            />
          </S.CardButtons>
        </S.CardBackground>
      </S.FormNewCard>
    </ColumnBackground>
  );
};

export default CreateCard;
