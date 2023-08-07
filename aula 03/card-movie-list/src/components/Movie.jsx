import React from "react";

const Movie = ({name, year, director}) => {
    return (
        <>
        <div>
            <h3>{name}</h3>
            <p>Ano de Lançamento: {year}</p>
            <p>Diretor: {director}</p>
        </div>
        </>
    )
}

export default Movie;