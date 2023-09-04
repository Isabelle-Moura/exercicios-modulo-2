import { useState, useEffect } from "react";
import * as Style from "../assets/style/style";

interface Quote {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
}

const Quotes = () => {
  const [quote, setQuote] = useState<Quote>();

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Deu ruim. O erro foi: " + error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      {quote && (
        <>
          <Style.H1>"{quote.content}"</Style.H1>
          <Style.H1> - {quote.author}</Style.H1>
        </>
      )}
      <Style.Button onClick={getQuote}>Frase aleatória</Style.Button>
    </div>
  );
};

export default Quotes;
