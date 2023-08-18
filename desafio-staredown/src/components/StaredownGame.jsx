import { useState } from "react";
import React from "react";
import "./StaredownGame.css";

const StaredownGame = () => {
  const [colors, setColors] = useState(generateColors());
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(5);

  function generateColors() {
    const grid = [];
    const colorOptions = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "dark-green", "tomato", "aqua", ];

    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        row.push(randomColor);
      }
      grid.push(row);
    }

    return grid;
  }

  const handleColorClick = (row, col) => {
    const clickedColor = colors[row][col];
  
    for (let i = 0; i < row; i++) {  
      for (let j = 0; j < 4; j++) {
        if (colors[i][j] === clickedColor) {
          setColors(generateColors());
          setScore(score => score + 1)
          return;
        }
      }
    }
    setLives((prevLives) => prevLives - 1);
    if (lives === 1){
        alert("End game! Try again...")
        window.location.reload()
    }
  };

  return (
    <div>
      <h1>Staredown Game</h1>
      <p>Vidas: {Array.from({ length: lives }, (_, index) => "💚")}</p>
      <p>Pontuação: {score}</p>
      <div>
        {colors.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((color, colIndex) => (
              <div
                className={`color-cell ${color}`}
                key={colIndex}
                onClick={() => handleColorClick(rowIndex, colIndex)}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaredownGame;
