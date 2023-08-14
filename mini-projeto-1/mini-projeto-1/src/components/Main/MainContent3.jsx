import React from "react";
import { GameImagePage3 } from "../../styles/styles";
import { GameContainerPage3 } from "../../styles/styles";
import { SpanTitle } from "../../styles/styles";
import { SpanContainerPage3 } from "../../styles/styles";
import { SpanTotal } from "../../styles/styles";

const MainContent3 = ({ selectedItems }) => {
  // Função para calcular o preço total dos itens selecionados
  const calculateTotalPrice = () => {
    let totalQuantity = 0;
    let totalPrice = 0;

    selectedItems.map((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.value * item.quantity;
    });

    return { totalQuantity, totalPrice: totalPrice.toFixed(2) };
  };

  return (
    <>
      <SpanContainerPage3>
        <SpanTitle style={{ marginLeft: "180px" }}>
          Produtos escolhidos:
        </SpanTitle>
        <GameContainerPage3>
          {selectedItems.map((item) => (
            <div key={item.id}>
              <GameImagePage3 src={item.image} />
            </div>
          ))}
        </GameContainerPage3>
        <SpanTotal>
          Total Produtos: {calculateTotalPrice().totalQuantity}{" "}
        </SpanTotal>
        <SpanTotal>Total: R${calculateTotalPrice().totalPrice}</SpanTotal>
      </SpanContainerPage3>
    </>
  );
};

export default MainContent3;
