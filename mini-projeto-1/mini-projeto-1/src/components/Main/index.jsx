// No componente Main
import React, { useState } from "react";
import MainHeader from "./MainHeader";
import MainContent1 from "./MainContent1";
import MainContent2 from "./MainContent2";
import MainFooter from "./MainFooter";

function Main() {
  const [indicePage, setIndicePage] = useState(1);
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]); // Estado para os itens selecionados

  const handleChangePage = () => {
    if (indicePage === 1) {
      setIndicePage(2);
    } else if (indicePage === 2) {
      setIndicePage(3);
    } else {
      setIndicePage(1);
    }
  };

  return (
    <>
      {indicePage === 1 && (
        <div>
          <MainHeader p="Produtos" cart={cart} />
          <MainContent1
            cart={cart}
            setCart={setCart}
            selectedItems={selectedItems} // Passando os itens selecionados
            setSelectedItems={setSelectedItems} // Passando a função para atualizar os itens selecionados
          />
          <MainFooter p="Ir para o carrinho" handleChangePage={handleChangePage} />
        </div>
      )}

      {indicePage === 2 && (
        <div>
          <MainHeader p="Carrinho" cart={cart} />
          <MainContent2 cart={cart} setCart={setCart} selectedItems={selectedItems} />
          <MainFooter p="Finalizar compra" />
        </div>
      )}

      {indicePage === 3 && (
        <div>
          <MainHeader cart={cart} />

          <MainFooter />
        </div>
      )}
    </>
  );
}

export default Main;
