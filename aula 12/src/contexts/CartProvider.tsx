import { ReactNode, createContext, useState, useContext } from "react";

interface CartContextProps {
  cart: CartProps;
  addItemCart: (product: ProductsProps) => void;
  removeItemCart: (product: ProductsProps) => void;
  updateItemCart: (productId: number, newQuantity: number) => void;
}

const CartContext = createContext<CartContextProps>({
  addItemCart: () => {},
  removeItemCart: () => {},
  updateItemCart: () => {},
  cart: [],
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartProps>([]);

  const addItemCart = (product: ProductsProps) => {
    setCart((prevCart) => [
      ...prevCart,
      {
        ...product,
        qtd: 1,
      },
    ]);
  };

  const removeItemCart = (product: ProductsProps) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const updateItemCart = (productId: number, newQuantity: number) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId) {
          if (newQuantity <= 0) {
            return null;
          }
          return { ...item, qtd: newQuantity };
        }
        return item;
      })
      .filter((item) => item !== null) as CartProps;

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItemCart, removeItemCart, updateItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
