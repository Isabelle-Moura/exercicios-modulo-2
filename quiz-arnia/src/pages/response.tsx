import { useEffect, useState } from "react";
import { ResponseContainer } from "../styles/Response";

const Response = () => {
  const [questions, setQuestions] = useState<Array<QuestionType>>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [accuracyPercentage, setAccuracyPercentage] = useState(0);

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

  const handleAnswer = () => {
    const currentQuestionData = questions[currentQuestion];
    const selectedRadio = document.querySelector(
      'input[type="radio"]:checked'
    ) as HTMLInputElement;
    if (selectedRadio) {
      const userSelectedAnswer = selectedRadio.value;
      const userAnswerIsCorrect =
        userSelectedAnswer === currentQuestionData.correctAnswer;
      if (userAnswerIsCorrect) {
        setCorrectAnswer(correctAnswer + 1);
      }
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

  useEffect(() => {
    // Recalcula a porcentagem de acertos sempre que correctAnswer ou totalQuestions mudar.
    const totalQuestions = questions.length;
    const newAccuracyPercentage = (correctAnswer / totalQuestions) * 100;
    setAccuracyPercentage(newAccuracyPercentage);
  }, [correctAnswer, questions]);

  return (
    <>
      <ResponseContainer>
        {questions.length > 0 ? (
          <div className="container">
            <h3 className="question">{questions[currentQuestion].question}</h3>
            <div className="input-radio">
              <input
                type="radio"
                id={`answer1-${currentQuestion}`}
                name={`question${currentQuestion}`}
                value="answer1"
              />
              <label htmlFor={`answer1-${currentQuestion}`}>
                {questions[currentQuestion].alternatives.answer1}
              </label>
            </div>
            <div className="input-radio">
              <input
                type="radio"
                id={`answer2-${currentQuestion}`}
                name={`question${currentQuestion}`}
                value="answer2"
              />
              <label htmlFor={`answer2-${currentQuestion}`}>
                {questions[currentQuestion].alternatives.answer2}
              </label>
            </div>
            <div className="input-radio">
              <input
                type="radio"
                id={`answer3-${currentQuestion}`}
                name={`question${currentQuestion}`}
                value="answer3"
              />
              <label htmlFor={`answer3-${currentQuestion}`}>
                {questions[currentQuestion].alternatives.answer3}
              </label>
            </div>
            <div className="input-radio">
              <input
                type="radio"
                id={`answer4-${currentQuestion}`}
                name={`question${currentQuestion}`}
                value="answer4"
              />
              <label htmlFor={`answer4-${currentQuestion}`}>
                {questions[currentQuestion].alternatives.answer4}
              </label>
            </div>

            <div className="button-container">
              <button
                className="button"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
              >
                ANTERIOR
              </button>
              <h3>
                Questão {currentQuestion + 1}/{questions.length}
              </h3>
              <button
                className="button"
                onClick={() => {
                  handleAnswer();
                  handleNextQuestion();
                }}
                disabled={currentQuestion >= questions.length - 1}
              >
                PRÓXIMO
              </button>
            </div>
            <h3>Porcentagem de Acertos: {accuracyPercentage.toFixed(2)}%</h3>
          </div>
        ) : (
          <div> Nenhum dado foi encontrado :/</div>
        )}
      </ResponseContainer>
    </>
  );
};

export default Response;
