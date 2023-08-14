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
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (item) => {
    handleIncreaseQuantity();
    setCart([...cart, { ...item }]);
  };

  const handleRemoveFromCart = (item) => {
    handleDecreaseQuantity();
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  // Função para calcular o preço total dos itens selecionados
  const calculateTotalPrice = () => {
    let total = 0;
    selectedItems.forEach((item) => {
      total += item.value * quantity;
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
            <Span>Quantidade: {quantity}</Span>
            <ButtonsDisplay>
              <ButtonMoreOrLess onClick={() => handleAddToCart(item)}>+</ButtonMoreOrLess>
              <ButtonMoreOrLess onClick={() => handleRemoveFromCart(item)}>-</ButtonMoreOrLess>
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
