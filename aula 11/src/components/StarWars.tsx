import { useState, useEffect } from "react";
import * as Style from "../assets/style/style";

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

const StarWars = () => {
  const [starwars, setStarWars] = useState<StarWars>();
  const [planet, setPlanet] = useState(1);

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
    <div>
      {starwars && (
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
      )}
    </div>
  );
};

export default StarWars;
