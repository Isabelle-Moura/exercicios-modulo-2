/* Exercício 1:  
Considere a seguinte interface representando um usuário:

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}
Crie um novo tipo UserWithoutEmail utilizando Omit para remover a propriedade email da interface User.

Exercício 2:  
Considere a seguinte interface representando um carro:

interface Car {
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
}
Crie um novo tipo CarSummary utilizando Pick para selecionar apenas as propriedades brand, model e year da interface Car.

Exercício 3: 

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}
Crie um novo tipo ProductForm que seja uma versão modificada da interface Product, removendo as propriedades id e price, e adicionando uma propriedade opcional quantity do tipo number.

Exercício 4: 
Gere um projeto Typescript/React utilizando o Vite. No seu app.tsx, crie um tipo chamado UserData. Este tipo deverá conter nome, idade e gênero. Crie um estado que seja deste tipo (lembre-se dos genéricos) e faça um formulário para preencher este estado.

//////////////

*/
// import UserList from "./components/Users/UserList";
// import CarList from "./components/Cars/CarList";
// import ProductList from "./components/Products/ProductList";

// const users: User[] = [
//   {
//     id: 1,
//     name: "Isabelle",
//     age: 19,
//     email: "mourabisabelle@gmail.com",
//   } as User,
//   {
//     id: 2,
//     name: "Yllana",
//     age: 21,
//     email: "moura.yllana@gmail.com",
//   } as User,
//   {
//     id: 3,
//     name: "Jéssica",
//     age: 24,
//     email: "jessie.moura19@gmail.com",
//   } as User,
//   {
//     id: 4,
//     name: "Jorge",
//     age: 29,
//   } as User,
// ];

// const cars: CarSummary[] = [
//   {
//     brand: "Citroën",
//     model: "Aircross",
//     year: "2010",
//   },
//   {
//     brand: "Gurgel",
//     model: "Bugato",
//     year: "1970",
//   },
//   {
//     brand: "Simca",
//     model: "Esplanada",
//     year: "1967",
//   },
// ];

// const products: ProductForm[] = [
//   {
//     name: "Product 1",
//     description: "Description of Product 1",
//     category: "Category A",
//     quantity: 10,
//   },
//   {
//     name: "Product 2",
//     description: "Description of Product 2",
//     category: "Category B",
//   },
//   {
//     name: "Product 3",
//     description: "Description of Product 3",
//     category: "Category A",
//     quantity: 5,
//   },
// ];

// 👉 Isso daqui tem que colocar dentro do componente App
{
  /* <div>
  <UserList users={users} />
</div>
<hr />
<div>
  <CarList cars={cars} />
</div>
<hr />
<div>
  <ProductList products={products} />
</div> */
}

import { useState } from "react";
import Label from "./components/Form/Label";
import Input from "./components/Form/Input";

interface UserData {
  name: string;
  age: number;
  gender: string;
}

const App = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    age: 0,
    gender: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("User data: " + userData);
  };

  return (
    <>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <Label title="Nome:" />
        <Input
          name="name"
          placeholder="Digite o seu nome."
          onChange={handleInputChange}
        />
        <br />
        <Label title="Idade:" />
        <Input
          name="age"
          placeholder="Digite a sua idade."
          onChange={handleInputChange}
        />
        <br />
        <Label title="Gênero:" />
        <Input
          name="gender"
          placeholder="Digite o seu gênero."
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default App;
