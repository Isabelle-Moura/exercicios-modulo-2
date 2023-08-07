import React from 'react';

const products = [
  { name: "Miojo Nissin Lámen", stock: 5, price: 6.9 },
  { name: "Massa de Tomate Elefante", stock: 15, price: 16.9 },
  { name: "Trakinas Meio a Meio", stock: 0, price: 3.9 },
  { name: "Arroz Branco Tipo 1", stock: 0, price: 4.9 },
  { name: "Pão de Forma Plus Vita", stock: 5, price: 6.9 },
  { name: "Café 3 Corações 500g", stock: 5, price: 8.9 }
];

const ProductList = () => {
  return (
    <>
      <div>
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <h3>{product.name}</h3>
              {product.stock > 0 ? (
                <>
                  <p>Preço: R$ {product.price.toFixed(2)}</p>
                  <button>Adicionar ao carrinho</button>
                </>
              ) : (
                <p>Produto esgotado :/</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;