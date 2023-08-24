import React, { useState } from "react";
import AddressFormPage from "./AddressFormPage";
import ProductReviewPage from "./ProductReviewPage";

type Page = "address" | "review";

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState<Page>("address");

  const navigateToAddressPage = () => {
    setCurrentPage("address");
  };

  const navigateToReviewPage = () => {
    setCurrentPage("review");
  };

  return (
    <div>
      <button onClick={navigateToAddressPage}>Address Form</button>
      <button onClick={navigateToReviewPage}>Product Review</button>

      {/* Renderiza a página selecionada com base no estado */}
      {currentPage === "address" && <AddressFormPage />}
      {currentPage === "review" && <ProductReviewPage />}
    </div>
  );
};

export default Navigation;
