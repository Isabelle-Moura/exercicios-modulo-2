import React, { useState } from "react";
import { faker } from '@faker-js/faker';

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const numImages = 10;

  const getImage = () => {
    return faker.image.image();
  };

  const handlePreviousButton = () => {
    setCurrentImage((prevImage) =>
      prevImage > 0 ? prevImage - 1 : numImages - 1
    );
  };

  const handleNextButton = () => {
    setCurrentImage((prevImage) =>
      prevImage < numImages - 1 ? prevImage + 1 : 0
    );
  };

  return (
    <div>
      <button onClick={handlePreviousButton}>Anterior</button>
      <img src={getImage()} alt={`Imagem ${currentImage}`} />
      <button onClick={handleNextButton}>Próxima</button>
    </div>
  );
};

export default ImageCarousel