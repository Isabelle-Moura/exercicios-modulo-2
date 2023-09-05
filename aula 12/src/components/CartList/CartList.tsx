import { useCart } from "../../contexts/CartProvider";

const CartList = () => {
  const { cart, removeItemCart, updateItemCart } = useCart();

  return (
    <div>
      <h1>
        Carrinho de Compras - Total:{" "}
        {cart.reduce((acc, curr) => acc + curr.price * curr.qtd, 0)}
      </h1>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>
              {item.title} - Quantidade: {item.qtd}
              <button onClick={() => updateItemCart(item.id, item.qtd + 1)}>
                Incrementar
              </button>
              <button onClick={() => updateItemCart(item.id, item.qtd - 1)}>
                Decrementar
              </button>
              <button onClick={() => removeItemCart(item)}>
                Remover do carrinho
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
