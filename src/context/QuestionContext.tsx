import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface QuestionContextProps {
  questions: Question[];
  setQuestion: Dispatch<SetStateAction<Question[]>>;
}

interface QuestionProviderProps {
  children: ReactNode;
}

const QuestionContext = createContext<QuestionContextProps>({
  questions: [],
  setQuestion: () => [],
});

export const QuestionProvider = ({ children }: QuestionProviderProps) => {
  const [questions, setQuestion] = useState<Question[]>([]);

  return (
    <QuestionContext.Provider value={{ questions, setQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => {
  return useContext(QuestionContext);
};
