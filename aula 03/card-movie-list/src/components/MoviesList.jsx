import React from "react";
import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  const sortedMovies = [...movies].sort((a, b) => b.year - a.year);

  return (
    <>
      <div>
        <h1>Filmes</h1>
        <button onClick={() => window.location.reload()}>
          Reiniciar a ordem
        </button>
        {sortedMovies.map((movie, index) => (
          <Movie
            key={index}
            name={movie.name}
            year={movie.year}
            director={movie.director}
          />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
