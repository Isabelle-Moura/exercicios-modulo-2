import React, { useState } from "react";
import { GameImage } from "../../styles/styles";
import { GameContainerPage2 } from "../../styles/styles";
import { Span } from "../../styles/styles";
import { SpanTitle } from "../../styles/styles";
import { SpanContainer } from "../../styles/styles";
import { ButtonMoreOrLess } from "../../styles/styles";
import { ButtonsDisplay } from "../../styles/styles";
import { SpanTotal } from "../../styles/styles";

const MainContent2 = ({ cart, setCart, selectedItems }) => {
  const [quantities, setQuantities] = useState({});

  const handleIncreaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  const handleAddToCart = (item) => {
    handleIncreaseQuantity(item.id);
    setCart([...cart, { ...item }]);
  };

  const handleRemoveFromCart = (item) => {
    handleDecreaseQuantity(item.id);
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  // Função para calcular o preço total dos itens selecionados
  const calculateTotalPrice = () => {
    let total = 0;
    selectedItems.forEach((item) => {
      total += item.value * (quantities[item.id] || 0);
    });
    return total.toFixed(2);
  };

  return (
    <>
      {selectedItems.map((item) => (
        <GameContainerPage2 key={item.id}>
          <GameImage src={item.image} />
          <SpanContainer>
            <SpanTitle>{item.name}</SpanTitle>
            <Span>Valor: R${item.value},00</Span>
            <Span>Quantidade: {quantities[item.id] || 1}</Span>
            <ButtonsDisplay>
              <ButtonMoreOrLess onClick={() => handleAddToCart(item)}>
                +
              </ButtonMoreOrLess>
              <ButtonMoreOrLess onClick={() => handleRemoveFromCart(item)}>
                -
              </ButtonMoreOrLess>
            </ButtonsDisplay>
          </SpanContainer>
        </GameContainerPage2>
      ))}
      <div>
        <SpanTotal>Total: R${calculateTotalPrice()}</SpanTotal>
      </div>
    </>
  );
};

export default MainContent2;
