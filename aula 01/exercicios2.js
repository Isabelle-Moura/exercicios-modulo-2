// 1 - Crie uma função que receba dois objetos como argumentos e retorne um novo objeto que seja uma cópia do primeiro objeto com as propriedades do segundo objeto mescladas nele.

/* // Exemplo de uso
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject); */

const object1 = {a: 1, b: 2}
const object2 = {b: 3, c: 4}

const mergeObjects = () => {
    return {...object1, ...object2}
}

const mergedObject = mergeObjects(object1, object2)
console.log(mergedObject) // Output: { a: 1, b: 3, c: 4 } 

//...

// 2 - Escreva uma função que receba um array com pelo menos 3 elementos e retorne um novo array contendo o primeiro, o último e o elemento do meio, naquela ordem. Obs.: O elemento do meio caso seja um número par será o número mais próximo da esquerda.

/* // Exemplo de uso
const array = [1, 2, 3, 4, 5];
const extractedElements = extractElements(array);
console.log(extractedElements); */

const array = [1, 2, 3, 4, 5]

const extractElements = (array) => {
    if (array.length < 3) {
        console.error('O array deve possuir, pelo menos, 3 elementos!')
    }
    const middle = array[Math.floor ((array.length - 1) / 2)]
    const first = array[0]
    const last = array.pop()
    return [first, middle, last]
}

const extractedElements = extractElements(array)
console.log(extractedElements) // Output: [1, 3, 5] 

//...

// 3 - Crie uma função que possa receber uma quantidade variável de argumentos numéricos e retorne a soma de todos eles.

/* // Exemplo de uso
const result1 = sum(1, 2, 3);
console.log(result1); 

const result2 = sum(10, 20, 30, 40, 50);
console.log(result2); */

const sum = (...numbers) => {
    return numbers.reduce ((counter, number) => counter + number, 0)
}

const result1 = sum(1, 2, 3)
const result2 = sum(10, 20, 30, 40, 50)

console.log(result1) // Output: 6
console.log(result2) // Output: 150 

//...

// 4 - Escreva uma função que receba um objeto e um array de strings contendo os nomes das propriedades a serem removidas desse objeto.

/* / Exemplo de uso
const person = { name: 'John', age: 30, city: 'New York' };
const propertiesToRemove = ['age', 'city'];
const newPerson = removeProperties(person, propertiesToRemove);
console.log(newPerson); */

const person = {name: 'John', age: 30, city: 'New York'}
const propertiesToRemove = ['age', 'city']

const removeProperties = (object, array) => {
    array.forEach(item => {
        delete object[item];
    });
    return object;
}

const newPersonObject = removeProperties(person, propertiesToRemove)
console.log(newPersonObject) // Output: { name: 'John' }  

//...

// 5 - Reescreva a função .map do javascript utilizando o for.
/* // Exemplo de uso
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = map(numbers, function (element) {
  return element * 2;
});

console.log(doubledNumbers); */

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = (numbers) => {
    const doubled = []
    for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2)
    }
    return doubled
}

console.log(doubledNumbers(numbers)) // Output: [2, 4, 6, 8, 10]

//...

// 6 - Crie uma função que receba uma propriedade e um valor, e adicione em um objeto já existe, criando um novo objeto.

/* // Exemplo de uso
const person = { name: 'Marcos', age: 34 };
const updatedPerson = addProperty(person, 'state', 'Bahia');
console.log(updatedPerson); */

const personObj = {name: 'Marcos', age: 34}

// É passado como parâmetro da função qual o objeto, a propriedade e o valor dessa propriedade.
const addProperty = (obj, prop, value) => {
    const updatedObj = {...obj}
    updatedObj[prop] = value
    return updatedObj
}

const updatedPerson = addProperty(personObj, 'state', 'Bahia')
console.log(updatedPerson) // Output: { name: 'Marcos', age: 34, state: 'Bahia' }

//...

// 7 - Escreva uma função que receba uma quantidade variável de argumentos numéricos e retorne um objeto contendo a soma total e o restante quando dividido por 10.

/* // Exemplo de uso
const result1 = sumAndRemainder(10, 20, 30, 40, 50);
console.log(result1);

const result2 = sumAndRemainder(15, 7, 3);
console.log(result2); */ 

const sumAndRemainder = (...args) => { //args = argumentos, tá?
    const sum = args.reduce ((counter, args) => counter + args, 0)
    const remainder = sum % 10

    return {sum, remainder}  // {sum: com a soma feita aqui dentro, remainder: com o resto da divisã aqui dentro}
}

const total1 = sumAndRemainder(10, 20, 30, 40, 50)
const total2 = sumAndRemainder(15, 7, 3)

console.log(total1) // Output: { sum: 150, remainder: 0}
console.log(total2) // Output: { sum: 25, remainder: 5 } 

//...

// 8 - Reimplemente a função fetch para usar só um then e já retornar direto os dados do json.

/* // Exemplo de uso
newFetch('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response)) */

const newFetch = async (url) => {
    return await fetch (url) 
    .then (response => response.json())
}

newFetch ('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response)) 
  .catch(error => console.error(error)) // Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }