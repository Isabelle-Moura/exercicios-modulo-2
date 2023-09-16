import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCirclePlus,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  CardBackground,
  CardTitle,
  CardButtons,
  TitleAndEdit,
  ButtonsContainer,
  CardDescription,
  TextArea,
  NewInput,
  TextAreaAndInput,
} from "../../../styles/Home/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({
  cardTitle,
  cardDescription,
  placeholderInput,
  placeholderTextArea,
  onClick,
}: CardProps) => {
  return (
    <>
      {cardTitle && cardDescription ? (
        <CardBackground>
          <div>
            <TitleAndEdit>
              <CardTitle>{cardTitle}</CardTitle>
              <CardButtons onClick={onClick}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="xl"
                  style={{ color: "#3a72f8" }}
                />
              </CardButtons>
            </TitleAndEdit>
            <CardDescription>{cardDescription}</CardDescription>
          </div>
          <ButtonsContainer>
            <CardButtons onClick={onClick}>
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                size="xl"
                style={{ color: "#3a72f8" }}
              />
            </CardButtons>
            <CardButtons onClick={onClick}>
              <FontAwesomeIcon
                icon={faTrashCan}
                size="xl"
                style={{ color: "#3a72f8" }}
              />
            </CardButtons>
            <CardButtons onClick={onClick}>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                size="xl"
                style={{ color: "#3a72f8" }}
              />
            </CardButtons>
          </ButtonsContainer>
        </CardBackground>
      ) : null}
      {placeholderInput && placeholderTextArea ? (
        <CardBackground>
          <TextAreaAndInput>
            <NewInput placeholder={placeholderInput} />
            <TextArea placeholder={placeholderTextArea} />
            <CardButtons onClick={onClick}>
              <FontAwesomeIcon
                icon={faCirclePlus}
                size="xl"
                style={{ color: "#3a72f8", marginTop: "6" }}
              />
            </CardButtons>
          </TextAreaAndInput>
        </CardBackground>
      ) : null}
    </>
  );
};

export default Card;
