import { useCallback, useEffect, useState } from "react";
import * as Style from "../assets/style/style";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  image: string;
}

type Characters = Array<Character>;

const urlBase = "https://rickandmortyapi.com/api/character/";

const getCharacters = async (ids: number[]): Promise<Characters> => {
  const url = urlBase + ids.join(",");

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 200) {
    return await response.json();
  }

  if (response.status < 500) {
    throw new Error("Algum parametro está inválido");
  }

  throw new Error("Deu ruim");
};

const generateRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
};

const generateRandomIds = (): number[] => {
  const numbers: number[] = [];

  for (let i = 0; i < 6; i++) {
    numbers.push(generateRandomNumber(826));
  }

  return numbers;
};

const RickAndMorty = () => {
  const [characters, setCharacters] = useState<Characters>([]);
  const [ids, setIds] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const loadCharacters = useCallback(async () => {
    try {
      const data = await getCharacters(ids);
      setCharacters(data);
    } catch (error) {
      console.log(error);
    }
  }, [ids]);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  const handleNewCharacters = () => {
    setIds(generateRandomIds());
  };

  return (
    <>
      <Style.Button onClick={handleNewCharacters}>
        Buscar + personagens
      </Style.Button>
      <div>
        <Style.Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((char) => (
              <tr key={char.id}>
                <td>{char.id}</td>
                <td>{char.name}</td>
                <td>
                  <img height={50} src={char.image} alt={char.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </Style.Table>
      </div>
    </>
  );
};

export default RickAndMorty;
