import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "../pages/list";
import Response from "../pages/response";
import BaseLayout from "../components/base-layout/BaseLayout";
import Create from "../pages/create";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/listar-perguntas" element={<List />} />
          <Route path="/fazer-o-quiz" element={<Response />} />
          <Route path="/cadastrar-perguntas" element={<Create />} />
          <Route path="/resultado" element={<Response />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
