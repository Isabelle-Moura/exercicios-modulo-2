import React from "react";
import { useState } from "react";

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const phrases = [
  "Seja como um raio de sol intenso: espalhe luz, calor e faça as pessoas se perguntarem qual é a necessidade de você estar tão forte logo de manhã.",
  "Faça sempre o seu melhor, mesmo que o seu melhor para hoje seja apenas tirar uma soneca.",
  "Que todos os nossos passos nos levem para onde a felicidade nos espera. Mesmo que seja até a sorveteria.",
  "Que a felicidade que você procura seja tão plena quanto um cachorrinho em uma piscina de bolinhas.",
  "O sucesso é como um pote de ketchup, às vezes você tem que bater um pouquinho para sair.",
  "A vida é como uma caixa de chocolates: você nunca sabe realmente se o que te espera é uma coisa boa ou muito amarga.",
  "Quando você tiver finalizado uma meta, não olhe para ela como a linha de chegada. Dobre a meta, triplique a meta, quadruplique a meta e depois ria da cara da meta.",
  "Quando você tiver finalizado uma meta, não olhe para ela como a linha de chegada. Dobre a meta, triplique a meta, quadruplique a meta e depois ria da cara da meta.",
  "Seja a pessoa que seu cachorro acredita que você é!",
];

const MotivationalQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const generateRandomQuote = () => {
    const newIndex = random(0, phrases.length - 1);
    setCurrentQuote(newIndex);
  };

  return (
    <div>
      <p>{phrases[currentQuote]}</p>
      <button onClick={generateRandomQuote}>Gerar Outra Frase</button>
    </div>
  );
};

export default MotivationalQuotes;
