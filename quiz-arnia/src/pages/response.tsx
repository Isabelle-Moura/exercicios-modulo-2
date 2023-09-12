import { useEffect, useState } from "react";
import { ResponseContainer } from "../styles/Response";
import api from "../services/api";

const Response = () => {
  const [questions, setQuestions] = useState<Array<QuestionType>>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [percentage, setPercentage] = useState(0);

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

  const handleUserAnswer = (selectedAnswer: string) => {
    const currentQuestionData = questions[currentQuestion];
    if (selectedAnswer === currentQuestionData.correctAnswer) {
      // Incrementa o número de respostas corretas
      setCorrectAnswers(correctAnswers + 1);
    }

    // Chama a função para calcular a porcentagem
    calculateAccuracyPercentage();

    if (currentQuestion < questions.length - 1) {
      handleNextQuestion();
    }
  };

  const calculateAccuracyPercentage = () => {
    const totalQuestions = questions.length;
    if (totalQuestions === 0) return 0;
    return setPercentage((correctAnswers / totalQuestions) * 100);
  };

  const getAllQuestions = async () => {
    try {
      const response = await api.get("http://localhost:3000/questions");

      if (response.data) {
        setQuestions(response.data);
      } else {
        throw new Error("Ocorreu um erro ao carregar as perguntas.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <>
      <ResponseContainer>
        {questions.length > 0 ? (
          <div className="container">
            <h3 className="question">{questions[currentQuestion].question}</h3>
            <h3>Porcentagem de Acertos: {percentage}%</h3>
            <div className="input-radio">
              <input
                type="radio"
                id={`answer1-${currentQuestion}`}
                name={`question${currentQuestion}`}
                value="answer1"
                onClick={() => handleUserAnswer("answer1")}
              />
              <label htmlFor={`answer1-${currentQuestion}`}>
                <h4>{questions[currentQuestion].alternatives.answer1}</h4>
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
                <h4>{questions[currentQuestion].alternatives.answer2}</h4>
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
                <h4>{questions[currentQuestion].alternatives.answer3}</h4>
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
                <h4>{questions[currentQuestion].alternatives.answer4}</h4>
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
              {/* O botão PRÓXIMO agora avança após a seleção da resposta */}
              {currentQuestion < questions.length - 1 && (
                <button className="button" onClick={handleNextQuestion}>
                  PRÓXIMO
                </button>
              )}
            </div>
          </div>
        ) : (
          <div> Nenhum dado foi encontrado :/</div>
        )}
      </ResponseContainer>
    </>
  );
};

export default Response;
