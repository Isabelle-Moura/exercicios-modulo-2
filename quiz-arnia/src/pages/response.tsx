import { useEffect, useState } from "react";

const Response = () => {
  const [questions, setQuestions] = useState<Array<QuestionType>>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getAllQuestions = async () => {
    try {
      const response = await fetch("http://localhost:3000/questions", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Ocorreu um erro ao carregar as perguntas.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllQuestions().then(setQuestions);
  }, []);

  return (
    <>
      <div>
        {questions.length > 0 ? (
          <div>
            <h3>Pergunta {currentQuestion + 1}</h3>
            <p>{questions[currentQuestion].question}</p>
            <div>
              <input type="radio" />
              <p>{questions[currentQuestion].answer1}</p>
            </div>
            <div>
              <input type="radio" />
              <p>{questions[currentQuestion].answer2}</p>
            </div>
            <div>
              <input type="radio" />
              <p>{questions[currentQuestion].answer3}</p>
            </div>
            <div>
              <input type="radio" />
              <p>{questions[currentQuestion].answer4}</p>
            </div>
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              ANTERIOR
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestion > questions.length - 1}
            >
              PRÓXIMO
            </button>
          </div>
        ) : (
          <div> Nenhum dado foi encontrado :/</div>
        )}
      </div>
    </>
  );
};

export default Response;
