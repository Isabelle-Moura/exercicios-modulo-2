import { CardBackground } from "../../../styles/Home/Card";
import {
  ColumnBackground,
  StyledColumnTitle,
} from "../../../styles/Home/Column";

const Column = ({ columnTitle, cardTitle, cardDescription }: ColumnProps) => {
  return (
    <>
      <ColumnBackground>
        <div>
          <StyledColumnTitle>{columnTitle}</StyledColumnTitle>
        </div>
        {/*  Aqui é o meu Card (vou separar depois :D)*/}
        {cardTitle && cardDescription ? (
          <CardBackground>
            <div>
              <div>
                <div>{cardTitle}</div>
                <button>EDIT</button>
              </div>
              <p>{cardDescription}</p>
            </div>
            <div>
              <button>PREV</button>
              <button>DELETE</button>
              <button>NEXT</button>
            </div>
          </CardBackground>
        ) : (
          <CardBackground>
            <input />
            <br />
            <textarea />
            <br />
            <button>+</button>
          </CardBackground>
        )}
      </ColumnBackground>
    </>
  );
};

export default Column;
