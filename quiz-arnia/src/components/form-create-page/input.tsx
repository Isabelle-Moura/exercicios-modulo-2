import { Dispatch, SetStateAction } from "react";
import { IptRadio } from "../../styles/Form";

interface Props {
  label: string;
  name: string;
  id: string;
  setAnswer: Dispatch<SetStateAction<string>>;
  setCorrect: Dispatch<SetStateAction<string>>;
}

const InputAndRadio = ({ label, id, name, setAnswer, setCorrect }: Props) => {
  return (
    <>
      <IptRadio>
        <div className="input">
          <label htmlFor={id}>{label}</label>
          <input
            type="text"
            id={id}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>

        <div className="radio">
          <label htmlFor={`${id}-radio`}>Correta?</label>
          <input
            type="radio"
            name={name}
            id={`${id}-radio`}
            value={id}
            onChange={(e) => setCorrect(e.target.value)}
          />
        </div>
      </IptRadio>
    </>
  );
};

export default InputAndRadio;
