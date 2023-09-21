import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqPage from "../pages/FAQ-Page";
import RegisterPage from "../pages/Register-Page";
import ShowQuestionsPage from "../pages/Show-Questions-Page";
import BaseLayout from "../components/Base-Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index path="/faq-arnia" element={<FaqPage />} />
          <Route
            path="/perguntas-cadastradas"
            element={<ShowQuestionsPage />}
          />
          <Route path="/cadastrar-pergunta" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
