import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputAndRadio from "../components/form-create-page/input";
import { Container } from "../styles/Form";

const Create = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState<string>("");

  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [answer3, setAnswer3] = useState<string>("");
  const [answer4, setAnswer4] = useState<string>("");
  const [answerCorrect, setAnswerCorrect] = useState<string>("");

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          question,
          answer1,
          answer2,
          answer3,
          answer4,
          answerCorrect,
        }),
      });
      navigate("/");
    } catch (_) {
      alert("Erro ao cadastrar pergunta");
    }
  };

  return (
    <>
      <Container>
        <form onSubmit={handleQuestionSubmit}>
          <div>
            <label className="label">Pergunta</label>
            <input
              className="input"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div>
            <InputAndRadio
              label="Alternativa 1"
              id="answer1"
              name="answer"
              setAnswer={setAnswer1}
              setCorrect={setAnswerCorrect}
            />
            <InputAndRadio
              label="Alternativa 2"
              id="answer2"
              name="answer"
              setAnswer={setAnswer2}
              setCorrect={setAnswerCorrect}
            />
            <InputAndRadio
              label="Alternativa 3"
              id="answer3"
              name="answer"
              setAnswer={setAnswer3}
              setCorrect={setAnswerCorrect}
            />
            <InputAndRadio
              label="Alternativa 4"
              id="answer4"
              name="answer"
              setAnswer={setAnswer4}
              setCorrect={setAnswerCorrect}
            />
          </div>
          <button type="submit">SALVAR</button>
        </form>
      </Container>
    </>
  );
};

export default Create;
