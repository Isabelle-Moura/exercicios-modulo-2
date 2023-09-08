import { useEffect, useState } from "react";
import { QuestionContainer } from "../styles/List";

const List = () => {
  const [questions, setQuestions] = useState<Array<QuestionType>>([]);
  const [editedQuestion, setEditedQuestion] = useState({
    id: 0,
    question: "",
  });

  const deleteButton = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/questions/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setQuestions(questions.filter((question: any) => question.id !== id));
      } else {
        throw new Error("Ocorreu um erro ao excluir a pergunta.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editButton = async (id: number, question: string) => {
    setEditedQuestion({ id, question });
  };

  const saveEditedQuestion = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/questions/${editedQuestion.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: editedQuestion.question }),
        }
      );

      if (response.ok) {
        setQuestions(
          questions.map((question) =>
            question.id === editedQuestion.id
              ? { ...question, question: editedQuestion.question }
              : question
          )
        );
        setEditedQuestion({ id: 0, question: "" });
      } else {
        throw new Error("Ocorreu um erro ao editar a pergunta.");
      }
    } catch (error) {
      console.error(error);
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
      <ul>
        <QuestionContainer>
          <div>
            {questions.map((question) => (
              <li key={question.id}>
                {question.id === editedQuestion.id ? (
                  <>
                    <input
                      type="text"
                      value={editedQuestion.question}
                      onChange={(e) =>
                        setEditedQuestion({
                          ...editedQuestion,
                          question: e.target.value,
                        })
                      }
                    />
                    <button onClick={() => saveEditedQuestion()}>SALVAR</button>
                  </>
                ) : (
                  <>
                    <div className="div">
                      <h4>{question.question}</h4>
                      <div className="buttons">
                        <button onClick={() => deleteButton(question.id)}>
                          DELETE
                        </button>
                        <button
                          onClick={() => {
                            return editButton(question.id, question.question);
                          }}
                        >
                          EDIT
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </div>
        </QuestionContainer>
      </ul>
    </>
  );
};

export default List;
