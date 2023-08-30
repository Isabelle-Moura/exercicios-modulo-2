interface ProductProps {
  product: ProductForm;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div>
      <h2>Nome do produto: {product.name}</h2>
      <p>Descrição do produto: {product.description}</p>
      <p>Categoria: {product.category}</p>
      {product.quantity !== undefined && <p>Quantidade: {product.quantity}</p>}
    </div>
  );
};

export default Product;
