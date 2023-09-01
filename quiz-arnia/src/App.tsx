import {
  Logo,
  HeaderBackground,
  MenuContainer,
  MenuItem,
} from "./styles/Header";
import GlobalStyle from "./styles/GlobalStyle";
import List from "./pages/list";
import Create from "./pages/create";
import Response from "./pages/response";
import { useState } from "react";

const screens = {
  create: "create",
  list: "list",
  response: "response",
};

const App = () => {
  const [currentScreen, setScreens] = useState("create");
  const [quizzes, setQuizzes] = useState<QuestionType[]>([]);

  const createQuiz = (quiz: QuestionType): void => {
    setQuizzes([...quizzes, quiz]);
  };

  return (
    <>
      <GlobalStyle />
      <HeaderBackground>
        <Logo src="https://cdn.izap.com.br/arnia.com.br/plus/images?src=tema/plusfiles/Logotipo.png&" />
        <MenuContainer>
          <MenuItem onClick={() => setScreens(screens.response)}>
            Fazer o Quiz
          </MenuItem>
          <MenuItem onClick={() => setScreens(screens.create)}>
            Cadastrar Perguntas
          </MenuItem>
          <MenuItem onClick={() => setScreens(screens.list)}>
            Listar Perguntas
          </MenuItem>
        </MenuContainer>
      </HeaderBackground>

      <main>
        <>
          {currentScreen === screens.list && <List />}
          {currentScreen === screens.create && (
            <Create createQuiz={createQuiz} />
          )}
          {currentScreen === screens.response && <Response />}
        </>
      </main>
    </>
  );
};

export default App;
