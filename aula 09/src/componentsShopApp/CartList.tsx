import CartItem from "./CartItem";
import { CartContainer } from "../styles/cartStyle";

interface CartItemProps {
  products: Products[];
}

const CartList = ({ products }: CartItemProps) => {
  return (
    <>
      <CartContainer>
        {products.map((item, index) => (
          <CartItem product={item} key={index} />
        ))}
      </CartContainer>
    </>
  );
};

export default CartList;
