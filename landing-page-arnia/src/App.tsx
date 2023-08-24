import Header from "./components/Header";
import Main from "./components/Main";
import MainForm from "./components/MainForm";
import { GlobalStyle } from "./styles/Global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <MainForm />
    </>
  );
};

export default App;
