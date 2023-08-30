import Product from "./Product";

interface ProductListProps {
  products: ProductForm[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      {products.map((item, index) => (
        <Product product={item} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
