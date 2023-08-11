// No componente MainContent2
import React from "react";
import { GameImage } from "../../styles/styles";
import { GameContainerPage2 } from "../../styles/styles"

const MainContent2 = ({ cart, setCart, selectedItems }) => {
  const handleAddToCart = (item) => {
    setCart([...cart, { ...item }]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <>
      <h2>Itens Selecionados</h2>
      {selectedItems.map((item) => (
        <GameContainerPage2 key={item.id}>
          <GameImage src={item.image} />
          <span>{item.name}</span>
          <span> Valor: R${item.value},00</span>
          <span> Quantidade: </span>
          <button onClick={() => handleAddToCart(item)}>+</button>
          <button onClick={() => handleRemoveFromCart(item)}>-</button>
        </GameContainerPage2>
      ))}
      <div>
        <span>Total: {selectedItems.value}</span>
      </div>
    </>
  );
};

export default MainContent2;