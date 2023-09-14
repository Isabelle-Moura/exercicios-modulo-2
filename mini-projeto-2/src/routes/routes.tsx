import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/fazer-login" element={<SignIn />} />
        <Route path="/fazer-cadastro" element={<SignUp />} />
        <Route path="/home-kanban" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
