/* 2 - Usando a API do Star Wars (https://swapi.dev/) faça  uma página que apresente uma tabela. Esta tabela deverá conter os seguintes dados acerca de planetas: Nome, Período de Rotação, Período Orbital, Diâmetro e População. 
Abaixo da tabela deverá ser renderizado dois botões, para atualizar os dados da tabela com outros planetas da api ou voltar aos anteriores. Veja que os botões só podem ser renderizados caso o link para busca de novos planetas ou de planetas anteriores exista. Estilize a tabela da forma que achar melhor.
 */

import { useState, useEffect } from "react";

interface Quote {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
}

const App = () => {
  const [quote, setQuote] = useState<Quote>();

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      throw new Error("Deu ruim. O erro foi: " + error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <div>
        <header>
          {quote ? (
            <>
              <div>
                <h1>"{quote.content}"</h1>
                <h1> - {quote.author}</h1>
              </div>
              <button onClick={getQuote}>Frase aleatória</button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </header>
      </div>
    </>
  );
};

export default App;
