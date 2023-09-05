interface ProductsProps {
  id: number;
  title: string;
  price: number;
}

interface CartProductProps extends ProductsProps {
  qtd: number;
}

type CartProps = Array<CartProductProps>;
