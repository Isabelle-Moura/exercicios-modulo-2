import React, { useState } from "react";
import { GameImage } from "../../styles/styles";
import { ButtonCheckbox } from "../../styles/styles";

const GameComp = ({ cart, item, setCart, onAddToSelectedItems }) => {
  const [isChecked, setIsChecked] = useState(cart.some((cartItem) => cartItem.id === item.id));

  const handleCheckboxChange = () => {
    if (isChecked) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
    setIsChecked(!isChecked);

    onAddToSelectedItems(item);
  };

  return (
    <>
      <GameImage src={item.image} />
      <h3>{item.name}</h3>
      <ButtonCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}></ButtonCheckbox>
      <strong>Valor: R${item.value},00</strong>
    </>
  );
};

export default GameComp;
