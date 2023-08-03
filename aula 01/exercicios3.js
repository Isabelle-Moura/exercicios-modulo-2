// 1 - Dado o array de números [2, 4, 6, 8], utilize o método map para criar um novo array com os números elevados ao quadrado.

const array = [2, 4, 6, 8];

const potencyNumbers = (array) => {
  return array.map((elements) => elements ** 2);
};

const newArray = potencyNumbers([...array]);
console.log(newArray);

//...

// 2 - Crie uma função que recebe o seguinte array de objetos representando livros:

/* const livros = [
  { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
  { titulo: "1984", autor: "George Orwell", ano: 1949 },
  { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 }
]; */

// Utilize o método filter para retornar um novo array contendo apenas os livros publicados antes de 2000.

const books = [
  { title: "Dom Quixote", author: "Miguel de Cervantes", year: 1605 },
  { title: "1984", author: "George Orwell", year: 1949 },
  {
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    year: 1967,
  },
  { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
];

const filterBooks = (books) => {
  return books.filter((book) => book.year < 2000);
};

const filteredBooks = filterBooks(books);
console.log(filteredBooks); /* Output: [
    { title: 'Dom Quixote', author: 'Miguel de Cervantes', year: 1605 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    {
      title: 'Cem Anos de Solidão',
      author: 'Gabriel García Márquez',
      year: 1967
    }
  ] */

//...

// 3 - Dado o objeto:
/*
const pessoa = { nome: "Ana", idade: 28, cidade: "São Paulo" }; */

// Utilize a destructuring para extrair e imprimir o valor da propriedade nome.

const person = { personName: "Ana", age: 28, city: "São Paulo" };

const { personName } = person;

console.log(personName); // Output: Ana

//...

// 4 - Crie uma função que recebe os seguintes arrays de números:
/* 
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6]; */

// Utilize o operador spread para criar um terceiro array que contém todos os números dos dois arrays anteriores.

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const mergeArrays = (numbers1, numbers2) => {
  return [...numbers1, ...numbers2];
};

const mergedArrays = mergeArrays(numbers1, numbers2);
console.log(mergedArrays); // Output : [1, 2, 3, 4, 5, 6]

//...

// 5 - Dado o array de strings ["Olá", "Mundo", "Javascript"], utilize o método reduce para concatenar todas as strings em uma única string.

const arrayStrings = ["Olá", "Mundo", "Javascript"];

const mergeStrings = (array) => {
  return array.reduce((counter, element) => counter + " " + element);
};

const mergedStrings = mergeStrings(arrayStrings);
console.log(mergedStrings); //Output: Olá Mundo Javascript

//...

// 6 - Crie uma função que recebe o seguinte objeto:

/* const operacoes = {
    a: 10,
    b: 5,
    callback: function(a, b) {
      return a + b;
    }
  };
*/
// A função deve chamar a callback passando as propriedades a e b como argumentos e retornar o resultado.

const operations = {
  a: 10,
  b: 5,
  callback: function (a, b) {
    return a + b;
  },
};

const executeCallback = (obj) => {
  return obj.callback(obj.a, obj.b);
};

const result = executeCallback(operations);
console.log(result); // Output: 15

//...

// 7 - Dado o array de objetos com propriedades nome e idade:

/* const pessoas = [
    { nome: "Carlos", idade: 30 },
    { nome: "Alice", idade: 25 },
    { nome: "Eduardo", idade: 40 }
  ]; */

// Utilize o método sort com uma função de comparação para ordenar os objetos por idade, do mais jovem para o mais velho.

const persons = [
  { name: "Charles", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Edward", age: 40 },
];

const sortByAge = (a, b) => {
  return a.age - b.age;
};

persons.sort(sortByAge);

console.log(persons); // Output: [ { name: 'Alice', age: 25 }, { name: 'Charles', age: 30 }, { name: 'Edward', age: 40 } ]

//...

// 8 - Crie uma função que recebe o seguinte objeto:

/* const listaCompras = {
    nome: "Supermercado",
    itens: ["Maçãs", "Bananas", "Laranjas"]
  }; */

// Utilize a destructuring para extrair o nome e, em seguida, utilize o método map para criar um novo array contendo o nome de cada item.

const shopList = {
  name: "Supermarket",
  itens: ["Apples", "Bananas", "Oranges"],
};

const { itens } = shopList;

const newListArray = (array) => {
  return array.map((itens) => itens);
};

const showList = newListArray(itens);
console.log(showList); //Output: [ 'Apples', 'Bananas', 'Oranges' ]

//...

// 9 - Dado o array de números [3, 7, 1, 9], crie uma função que utiliza o método forEach para imprimir o dobro de cada número.

const numbers = [3, 7, 1, 9];

const printDouble = (numbersArray) => {
  numbersArray.forEach((number) => {
    const double = number * 2;
    console.log(double);
  });
};

printDouble(numbers); //Output: 6, 14, 2, 18

//...

// 10 - Exercício 10: Crie uma função que recebe o seguinte array de objetos representando produtos:

/* const produtos = [
  { nome: "Camiseta", preco: 20, desconto: 0.1 },
  { nome: "Calça", preco: 50, desconto: 0.2 },
  { nome: "Tênis", preco: 80, desconto: 0.15 }
]; */

// Utilize o método map para criar um novo array com o preço dos produtos após aplicar o desconto.

const products = [
  { name: "Shirt", price: 20, descount: 0.1 },
  { name: "Pants", price: 50, descount: 0.2 },
  { name: "Snickers", price: 80, descount: 0.15 },
];

const applyDiscount = (productsArray) => {
  return productsArray.map((product) => {
    return {
      ...product,
      priceWithDescount: product.price + (1 - product.descount),
    };
  });
};

const productsWithDescount = applyDiscount(products);
console.log(productsWithDescount);

//...

// 11 - Dado o array de objetos com propriedades nome e salario:

/* const funcionarios = [
    { nome: "João", salario: 2500 },
    { nome: "Maria", salario: 3000 },
    { nome: "Carlos", salario: 2200 }
  ]; */

//  Crie uma função que utilize o método reduce para calcular o salário total de todos os funcionários.

const employees = [
  { name: "João", salary: 2500 },
  { name: "Maria", salary: 3000 },
  { name: "Carlos", salary: 2200 },
];

const calculateTotalSalary = (employeesArray) => {
  return employeesArray.reduce((total, employee) => total + employee.salary, 0);
};

const totalSalary = calculateTotalSalary(employees);
console.log(totalSalary); //Output: 7700

//...

// 12 - Crie uma função que recebe o seguinte objeto:

/* const aluno = {
    nome: "Pedro",
    notas: [7, 9, 8, 5]
  }; */

// Utilize a destructuring para extrair o nome e as notas do aluno. Em seguida, calcule a média das notas e retorne uma string no formato "O aluno {nome} possui uma média de {media}".

const student = {
  name: "Peter",
  grades: [7, 9, 8, 5],
};

const calculateAverage = ({ name, grades }) => {
  const average =
    grades.reduce((total, grade) => total + grade, 0) / grades.length;
  return `The student ${name} has an average of ${average.toFixed(2)}`;
};

const studentAverage = calculateAverage(student);
console.log(studentAverage); // Output: The student Peter has an average of 7.25

//...

// 13 - Dado o array de objetos com propriedades titulo e genero:

/* const filmes = [
    { titulo: "Matrix", genero: "Ficção Científica" },
    { titulo: "Senhor dos Anéis", genero: "Fantasia" },
    { titulo: "Interestelar", genero: "Ficção Científica" }
  ]; */

// Utilize o método filter para retornar um novo array contendo apenas os filmes do gênero "Ficção Científica".

const movies = [
  { title: "Matrix", genre: "Science Fiction" },
  { title: "Lord of the Rings", genre: "Fantasy" },
  { title: "Interstellar", genre: "Science Fiction" },
];

const scienceFictionMovies = movies.filter(
  (movie) => movie.genre === "Science Fiction"
);

console.log(scienceFictionMovies); // Output: [{ title: 'Matrix', genre: 'Science Fiction' }, { title: 'Interstellar', genre: 'Science Fiction' }]

//...

// 14 -  Crie uma função que recebe o seguinte objeto:

/* const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    caracteristicas: {
      motor: "2.0",
      cor: "Prata"
    }
  }; */

//Utilize a destructuring para extrair as propriedades marca, modelo e motor do carro e retorne uma string no formato "O carro {marca} {modelo} tem um motor {motor}".

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  characteristics: {
    engine: "2.0",
    color: "Silver",
  },
};

const getCarInfo = ({ brand, model, characteristics: { engine } }) => {
  return `The car ${brand} ${model} has an engine ${engine}`;
};

const carInfo = getCarInfo(car);
console.log(carInfo); // Output: The car Toyota Corolla has an engine 2.0

//...

// 15 -  Crie uma função que recebe o seguinte array de números:

/* const numeros = [10, 5, 8, 2, 9]; */

// Utilize o método every para verificar se todos os números no array são maiores que 1. Retorne true se a condição for verdadeira e false caso contrário.

const numbersArray = [10, 5, 8, 2, 9];

const numbersGreaterThanOne = (numbersArray) => {
  return numbersArray.every ((number) => number > 1);
}

const show = numbersGreaterThanOne(numbersArray);
console.log(show); // Output: true