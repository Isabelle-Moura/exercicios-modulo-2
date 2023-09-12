import { useEffect, useState } from "react";
import { QuestionContainer } from "../styles/List";
import api from "../services/api";

const List = () => {
  const [questions, setQuestions] = useState<Array<QuestionType>>([]);
  const [editedQuestion, setEditedQuestion] = useState({
    id: 0,
    question: "",
  });

  const deleteButton = async (id: number) => {
    try {
      const response = await api.delete(`/${id}`);

      if (response.status === 200) {
        setQuestions((prevQuestions) =>
          prevQuestions.filter((question) => question.id !== id)
        );
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
      const response = await api.put(`/${editedQuestion.id}`, {
        question: editedQuestion.question,
      });

      if (response.status === 200) {
        setQuestions((prevQuestions) =>
          prevQuestions.map((question) =>
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
      const response = await api.get("http://localhost:3000/questions");

      if (response.status) {
        console.log(response.data);
        setQuestions(response.data);
      } else {
        throw new Error("Ocorreu um erro ao carregar as perguntas.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllQuestions()
      .then(setQuestions())
      .catch((error) => {
        console.error(error);
        setQuestions([]);
      });
  }, []);

  return (
    <>
      <div>
        <QuestionContainer>
          <div>
            {questions !== undefined && questions.length > 0 ? (
              questions.map((question) => (
                <p key={question.id}>
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
                      <button onClick={() => saveEditedQuestion()}>
                        SALVAR
                      </button>
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
                </p>
              ))
            ) : (
              <p>Nenhuma pergunta encontrada.</p>
            )}
          </div>
        </QuestionContainer>
      </div>
    </>
  );
};

export default List;
