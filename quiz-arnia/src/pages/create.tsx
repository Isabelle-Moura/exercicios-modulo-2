import React, { useState } from "react";

type Props = {
  createQuiz: (quiz: QuestionType) => void;
};

type AnswerType = {
  id: string;
  correct: boolean;
  description: string;
};

type QuestionType = {
  question: string;
  answers: AnswerType[];
};

const generateValue = (): AnswerType => {
  return {
    id: "1",
    correct: false,
    description: "",
  };
};

const Create = ({ createQuiz }: Props) => {
  const [question, setQuestion] = useState<string>("");
  const [answer1, setAnswer1] = useState<AnswerType>(generateValue());
  const [answer2, setAnswer2] = useState<AnswerType>(generateValue());
  const [answer3, setAnswer3] = useState<AnswerType>(generateValue());
  const [answer4, setAnswer4] = useState<AnswerType>(generateValue());

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newQuestion: QuestionType = {
      question,
      answers: [answer1, answer2, answer3, answer4],
    };

    createQuiz(newQuestion);

    setQuestion("");
    setAnswer1(generateValue());
    setAnswer2(generateValue());
    setAnswer3(generateValue());
    setAnswer4(generateValue());
  };

  return (
    <div>
      <form onSubmit={handleQuestionSubmit}>
        <label>Pergunta</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div>
          <label>Alternativa 1</label>
          <input
            type="text"
            value={answer1.description}
            onChange={(e) =>
              setAnswer1({ ...answer1, description: e.target.value })
            }
          />
          <label>Correta?</label>
          <input
            type="checkbox"
            checked={answer1.correct}
            onChange={() =>
              setAnswer1({ ...answer1, correct: !answer1.correct })
            }
          />
        </div>
        {/* Repita o padrão para as outras alternativas */}
        <button type="submit">SALVAR</button>
      </form>
    </div>
  );
};

export default Create;
