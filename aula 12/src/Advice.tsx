import { useState, useEffect } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    try {
      const api = await fetch("https://api.adviceslip.com/advice");
      const data = await api.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.log("Deu ruim!!!: ", error);
    }
  };

  useEffect(() => {
    getAdvice(); // Busca o conselho quando o componente é montado
  }, []);

  return (
    <>
      <hr />
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Outro conselho</button>
    </>
  );
};

export default Advice;
