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
import {
  ColumnBackground,
  StyledColumnTitle,
} from "../../../styles/Home/Column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Column = ({ columnTitle, cardTitle, cardDescription }: ColumnProps) => (
  <>
    <ColumnBackground>
      <div>
        <StyledColumnTitle>{columnTitle}</StyledColumnTitle>
      </div>
      {/*  Aqui é o meu Card (vou separar depois :D)*/}
      {cardTitle && cardDescription ? (
        <CardBackground>
          <div>
            <TitleAndEdit>
              <CardTitle>{cardTitle}</CardTitle>
              <CardButtons>
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
            <CardButtons>
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                size="xl"
                style={{ color: "#3a72f8" }}
              />
            </CardButtons>
            <CardButtons>
              <FontAwesomeIcon
                icon={faTrashCan}
                size="xl"
                style={{ color: "#3a72f8" }}
              />
            </CardButtons>
            <CardButtons>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                size="xl"
                style={{ color: "#3a72f8" }}
              />
            </CardButtons>
          </ButtonsContainer>
        </CardBackground>
      ) : (
        <CardBackground>
          <TextAreaAndInput>
            <NewInput placeholder="Título" />
            <TextArea placeholder="Conteúdo" />
            <CardButtons>
              <FontAwesomeIcon
                icon={faCirclePlus}
                size="xl"
                style={{ color: "#3a72f8", marginTop: "6" }}
              />
            </CardButtons>
          </TextAreaAndInput>
        </CardBackground>
      )}
    </ColumnBackground>
  </>
);

export default Column;
