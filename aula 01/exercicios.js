// 1 - Escreva uma função chamada somarValores que recebe um array de números e retorna a soma de todos os valores do array utilizando a função reduce.

const numbers = [1, 2, 3, 4, 5];

const sumarizeNumbers = (numbers) => {
  return numbers.reduce((counter, number) => {
    return counter + number;
  }, 0);
};

const total = sumarizeNumbers(numbers);
console.log(total);
// Output: 15

//....

// 2 - Dado o seguinte array de objetos que representa produtos em um e-commerce:

/* const produtos = [
  { id: 1, nome: 'Camiseta', preco: 29.9 },
  { id: 2, nome: 'Calça', preco: 59.9 },
  { id: 3, nome: 'Tênis', preco: 99.9 }
];
*/

//Escreva uma função chamada calcularTotal que recebe esse array de produtos e retorna o valor total da compra, somando o preço de cada produto.

const products = [
    {id: 1, name: 'Shirt', price: 29.9},
    {id: 2, name: 'Dress', price: 59.9},
    {id: 3, name: 'Snickers', price: 99.9},
]

const calculateTotal = (products) => {
    return products.reduce ((counter, product) => {
        return counter + product.price
    }, 0)
}

const totalCalculated = calculateTotal(products)
console.log(totalCalculated)
// Output: 189.7

//...

// 3 - Escreva uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada número do array e retornar um novo array com os valores resultantes.

const double = number => number * 2;

const numbers2 = [1, 2, 3, 4, 5];

const doubleNumbers = (numbers2, double) => {
    return numbers2.map((number) => {
        return double(number);
    });
};

const doubledNumbers = doubleNumbers(numbers2, double);

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]

//...

// 4 - Escreva uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve aplicar a função de callback a cada palavra do array e retornar um novo array contendo apenas as palavras que satisfazem a condição definida pela função de callback.

const verifyLength = word => word.length > 5;

const words = ['house', 'carro', 'bicicle', 'pineapple', 'book'];

const filterWords = (words, verifyLength) => {
    return words.filter ((word) => {
        return verifyLength(word)
    })
}

const filteredWords = filterWords(words, verifyLength);

console.log(filteredWords);
// Output: ['bicicle', 'pineapple']

//...

// 5 - Dado o seguinte array de objetos que representa estudantes:

/* 
  const estudantes = [
  { nome: 'João', idade: 20 },
  { nome: 'Maria', idade: 22 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Ana', idade: 21 }
];
*/

// Escreva uma função chamada aplicarDesconto que recebe esse array de estudantes e uma função de callback. A função aplicarDesconto deve aplicar a função de callback a cada estudante, modificando o objeto para incluir uma propriedade "desconto" com base na idade do estudante. O desconto deve ser calculado da seguinte forma: se a idade do estudante for menor que 20, o desconto é de 10%; caso contrário, o desconto é de 5%. A função deve retornar o array de estudantes modificado.

const students = [
    {name: 'John', age: 20},
    {name: 'Mary', age: 22},
    {name: 'Peter', age: 18},
    {name: 'Anne', age: 21}
]

const calculateDescount = student => {
    if (student.age < 20) {
      student.descount = 0.1; // 10%
    } else {
      student.descount = 0.05; // 5%
    }
    return student;
  };

const applyDescount = (students, calculateDescount) => {
    return students.map(calculateDescount)
}

  const studentsWithDescount = applyDescount(students, calculateDescount);
  console.log(studentsWithDescount);

/*
 Output:
[
  { nome: 'João', idade: 20, desconto: 0.05 },
  { nome: 'Maria', idade: 22, desconto: 0.05 },
  { nome: 'Pedro', idade: 18, desconto: 0.1 },
  { nome: 'Ana', idade: 21, desconto: 0.05 }
]
 */

//...

// 6 - Dado o seguinte array de objetos que representa produtos em um e-commerce:

 /* 
   const produtos = [
  { id: 1, nome: 'Camiseta', preco: 29.9, quantidade: 2 },
  { id: 2, nome: 'Calça', preco: 59.9, quantidade: 1 },
  { id: 3, nome: 'Tênis', preco: 99.9, quantidade: 3 },
  { id: 4, nome: 'Meias', preco: 9.9, quantidade: 5 }
];
 */

// Escreva uma função chamada calcularTotalCompra que recebe esse array de produtos e retorna o valor total da compra, levando em consideração o preço e a quantidade de cada produto. 

const products2 = [
    {id: 1, name: 'Shirt', price: 29.9, quantity: 2},
    {id: 2, name: 'Pants', price: 59.9, quantity: 1},
    {id: 3, name: 'Snickers', price: 99.9, quantity: 3},
    {id: 4, name: 'Socks', price: 9.9, quantity: 5}
]

const calculateTotalShop = (products2) => {
    return products2.reduce ((counter, product) => {
        return counter + (product.price * product.quantity)
    },0)
}

const totalShop = calculateTotalShop(products2);
console.log(totalShop); 
// Output: 468.90