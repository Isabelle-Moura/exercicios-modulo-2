import React from 'react';
import Card from './components/Card';
import { faker } from '@faker-js/faker'
import './components/Card.css'
import Button from './components/Button';
import MoviesList from './components/MoviesList';

const App = () => {
  const movies = [
 { name: "Filme 1", year: 2024, director: "Diretor 1" },
 { name: "Filme 2", year: 2021, director: "Diretor 2" },
 { name: "Filme 3", year: 2023, director: "Diretor 3" },
];
  return (
    <>
    <div>
      <h1 className="h1">Meus Cards</h1>
      <Card
        title={"E" + faker.lorem.words(3)}
        subtitle={"O" + faker.lorem.words(2)}
        content={"A" + faker.lorem.words(10)}
      />
    </div>
    <div>
      <h1 className="h1">Botões</h1>
      <Button label="Botão 1"/>
      <Button label="Botão 2"/>
      <Button label="Botão 3"/>
    </div>
    <div>
      <MoviesList movies={movies} />
    </div>
    </>
  );
};

export default App;
