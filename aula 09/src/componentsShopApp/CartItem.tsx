import { DigitalProductItem } from "../styles/cartStyle";
import { FisicalProductItem } from "../styles/cartStyle";

type Props = {
  product: Products;
};

const CartItem = ({ product }: Props) => {
  if (product.type === "digital") {
    return (
      <>
        <DigitalProductItem>
          <h3>{product.name}</h3>
          <div>Preço: {product.price}</div>
          <div>Link para compra: {product.buyingLink}</div>
        </DigitalProductItem>
      </>
    );
  }
  if (product.type === "fisical") {
    return (
      <>
        <FisicalProductItem>
          <h3>{product.name}</h3>
          <div>Preço: {product.price}</div>
          <div>Peso: {product.weight}</div>
        </FisicalProductItem>
      </>
    );
  }
};

export default CartItem;
