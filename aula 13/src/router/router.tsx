import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AboutMePage from "../pages/about-me";
import ContactPage from "../pages/contact";
import NotFoundPage from "../pages/page-not-found";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
