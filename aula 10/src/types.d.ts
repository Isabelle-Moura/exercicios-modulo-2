interface User {
    id: number;
    name: string;
    age: number;
    email: string;
  }

type UserWithoutEmail = Omit<User, 'email'>

interface Car {
  brand: string;
  model: string;
  year: string;
  color: string;
  price: number;
}

type CarSummary = Pick<Car, 'brand' | 'model' | 'year'>

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

type ProductForm = Omit<Product, 'id' | 'price'> & {
  quantity?: number;
};