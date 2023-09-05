import CartList from "./components/CartList/CartList";
import ProductList from "./components/ProductList/ProductList";
import { CartProvider } from "./contexts/CartProvider";

function App() {
  return (
    <CartProvider>
      <ProductList />
      <CartList />
    </CartProvider>
  );
}

export default App;
