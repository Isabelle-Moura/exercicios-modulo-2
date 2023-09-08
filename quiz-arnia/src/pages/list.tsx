import { useEffect, useState } from "react";

const List = () => {
  const [questions, setQuestions] = useState<Array<QuestionType>>([]);

  const getAllQuestions = async () => {
    const response = await fetch("", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Error("Ocorreu um erro ao carregar as perguntas.");
  };

  useEffect(() => {
    getAllQuestions().then(setQuestions);
  }, []);

  return (
    <>
      <div>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>{question.question}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
