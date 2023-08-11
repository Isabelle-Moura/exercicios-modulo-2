import React, { useState, useEffect } from "react";
import { GameImage } from "../../styles/styles";

const GameComp = ({ cart, item, setCart, onAddToSelectedItems }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Verifica se o item já foi adicionado ao carrinho e atualiza o estado do checkbox
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    setIsChecked(isItemInCart);
  }, [cart, item]);

  const handleCheckboxChange = () => {
    // Adiciona ou remove o item do carrinho e dispara a função de seleção
    if (isChecked) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
    setIsChecked(!isChecked);

    // Dispara a função de seleção de itens
    onAddToSelectedItems(item);
  };

  return (
    <>
      <GameImage src={item.image} />
      <h3>{item.name}</h3>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <strong>Valor: R${item.value},00</strong>
    </>
  );
};

export default GameComp;
