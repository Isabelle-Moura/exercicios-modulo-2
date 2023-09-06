import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AboutMePage from "../pages/about-me";
import ContactPage from "../pages/contact";
import NotFoundPage from "../pages/page-not-found";
import BaseLayout from "../components/BaseLayout/BaseLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
