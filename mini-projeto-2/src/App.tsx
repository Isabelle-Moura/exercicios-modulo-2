import Router from "./routes/routes";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
