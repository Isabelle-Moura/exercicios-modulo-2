import Router from "./routes/routes";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import { CardProvider } from "./context/CardContext";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CardProvider>
          <Router />
        </CardProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
