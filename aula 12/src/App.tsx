import CartList from "./components/CartList/CartList";
import ProductList from "./components/ProductList/ProductList";
import { CartProvider } from "./contexts/CartProvider";
import Advice from "./Advice";

function App() {
  return (
    <>
      <CartProvider>
        <ProductList />
        <CartList />
      </CartProvider>
      <Advice />
    </>
  );
}

export default App;
