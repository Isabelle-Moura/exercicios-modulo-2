/* 1 - Faça um programa em React/TS que escreve no centro da tela uma mensagem aleatória. Esta mensagem deverá vir da API https://github.com/lukePeavey/quotable. Utilize o useEffect para fazer este fetch.
2 - Usando a API do Star Wars (https://swapi.dev/) faça  uma página que apresente uma tabela. Esta tabela deverá conter os seguintes dados acerca de planetas: Nome, Período de Rotação, Período Orbital, Diâmetro e População. 
Abaixo da tabela deverá ser renderizado dois botões, para atualizar os dados da tabela com outros planetas da api ou voltar aos anteriores. Veja que os botões só podem ser renderizados caso o link para busca de novos planetas ou de planetas anteriores exista. Estilize a tabela da forma que achar melhor.
*/

import { useState, useEffect } from "react";
import * as Style from "./assets/style/style";

interface StarWars {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

interface Quote {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
}

const App: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [starwars, setStarWars] = useState<StarWars | null>(null);
  const [planet, setPlanet] = useState(1);

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

  const getStarWarsData = async (planetId: number) => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/planets/${planetId}/`
      );
      const data = await response.json();
      setStarWars(data);
    } catch (error) {
      console.error("Deu bão não :(", error);
    }
  };

  useEffect(() => {
    getStarWarsData(planet);
  }, [planet]);

  const handlePreviousButton = () => {
    if (planet > 1) {
      setPlanet(planet - 1);
    }
  };

  const handleNextButton = () => {
    setPlanet(planet + 1);
  };

  return (
    <Style.AppWrapper>
      {quote ? (
        <>
          <div>
            <Style.H1>"{quote.content}"</Style.H1>
            <Style.H1> - {quote.author}</Style.H1>
          </div>
          <Style.Button onClick={getQuote}>Frase aleatória</Style.Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <hr />
      <div>
        {starwars ? (
          <>
            <Style.TableWrapper>
              <Style.Table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Período de Rotação</th>
                    <th>Período Orbital</th>
                    <th>Diâmetro</th>
                    <th>População</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{starwars.name}</td>
                    <td>{starwars.rotation_period}</td>
                    <td>{starwars.orbital_period}</td>
                    <td>{starwars.diameter}</td>
                    <td>{starwars.population}</td>
                  </tr>
                </tbody>
              </Style.Table>
              <Style.ButtonWrapper>
                <Style.Button
                  onClick={handlePreviousButton}
                  disabled={planet === 1}
                >
                  Anterior
                </Style.Button>
                <Style.Button onClick={handleNextButton}>Próximo</Style.Button>
              </Style.ButtonWrapper>
            </Style.TableWrapper>
          </>
        ) : (
          <Style.ErrorMessage>
            Nenhum dado encontrado. Tente novamente mais tarde.
          </Style.ErrorMessage>
        )}
      </div>
    </Style.AppWrapper>
  );
};

export default App;
