// import { useCards } from "../../../context/CardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./style";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  card: Card;
}

const Card = ({ card }: Props) => {
  // const { setCards } = useCards();

  return (
    <>
      <S.CardBackground>
        <S.TitleAndEdit>
          <S.CardTitle>{card.title}</S.CardTitle>
          <S.CardButtons>
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="xl"
              style={{ color: "#3a78f8" }}
            />
          </S.CardButtons>
        </S.TitleAndEdit>
        <S.CardDescription>{card.content}</S.CardDescription>

        <S.ButtonsContainer>
          <S.CardButtons>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              size="xl"
              style={{ color: "#3a78f8" }}
            />
          </S.CardButtons>
          <S.CardButtons>
            <FontAwesomeIcon
              icon={faTrashCan}
              size="xl"
              style={{ color: "#3a78f8" }}
            />
          </S.CardButtons>
          <S.CardButtons>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              size="xl"
              style={{ color: "#3a78f8" }}
            />
          </S.CardButtons>
        </S.ButtonsContainer>
      </S.CardBackground>
    </>
  );
};
export default Card;
