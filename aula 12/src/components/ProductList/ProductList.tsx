import { useCart } from "../../contexts/CartProvider";

const ProductList = () => {
  const products: ProductsProps[] = [
    {
      id: 1,
      title: "Empada",
      price: 5,
    },
    {
      id: 2,
      title: "Kibe",
      price: 5.5,
    },
    {
      id: 3,
      title: "Coxinha",
      price: 4.5,
    },
  ];

  const { addItemCart, cart } = useCart();

  return (
    <div>
      <h1>Produtos - {cart.length}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>
              {product.title} - {product.price}
              <button onClick={() => addItemCart(product)}>Adicionar</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
