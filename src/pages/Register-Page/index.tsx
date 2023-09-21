import { FormEvent, useState } from "react";
import { createQuestion } from "../../services/question-service";
import { useQuestion } from "../../context/QuestionContext";

const RegisterPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { setQuestion } = useQuestion();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await createQuestion({ title, content });
      setQuestion(response);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Cadastrar Pergunta</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pergunta"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Resposta"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default RegisterPage;
