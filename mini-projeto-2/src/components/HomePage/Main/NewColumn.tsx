import {
  ColumnBackground,
  StyledColumnTitle,
} from "../../../styles/Home/Column";
import * as S from "../../../styles/Home/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { addNewCard } from "../../../services/card-service";
import { useState } from "react";

const NewColumn = () => {
  const [addCard, setAddCard] = useState<Card>({
    title: "",
    content: "",
    column: "TODO",
    _id: "",
    userId: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setAddCard({
      ...addCard,
      [name]: value,
    });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;

    setAddCard({
      ...addCard,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (addCard) {
      const response = await addNewCard(addCard);
      setAddCard(response);
    }
  };

  return (
    <ColumnBackground>
      <StyledColumnTitle>New</StyledColumnTitle>
      <S.CardBackground>
        <S.FormNewCard onSubmit={handleSubmit}>
          <S.NewInput
            name="title"
            placeholder="Título"
            onChange={handleInputChange}
          />
          <S.TextArea
            name="content"
            placeholder="Conteúdo"
            onChange={handleTextAreaChange}
          />
          <S.CardButtons type="submit">
            <FontAwesomeIcon
              icon={faCirclePlus}
              size="xl"
              style={{ color: "#3a72f8" }}
            />
          </S.CardButtons>
        </S.FormNewCard>
      </S.CardBackground>
    </ColumnBackground>
  );
};

export default NewColumn;
