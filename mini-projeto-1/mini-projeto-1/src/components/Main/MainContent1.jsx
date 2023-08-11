// No componente MainContent1
import React from "react";
import GameComp from "./GameComp";
import { GameArray } from "./GameArray";
import { GameContainer } from "../../styles/styles";
import { GameCard } from "../../styles/styles";

const MainContent1 = ({ cart, setCart, selectedItems, setSelectedItems }) => {
  const handleAddToSelectedItems = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <>
      <GameContainer>
        {GameArray.map((item) => (
          <GameCard key={item.id}>
            <GameComp
              cart={cart}
              item={item}
              setCart={setCart}
              onAddToSelectedItems={() => handleAddToSelectedItems(item)}
            />
          </GameCard>
        ))}
      </GameContainer>
    </>
  );
};

export default MainContent1;
