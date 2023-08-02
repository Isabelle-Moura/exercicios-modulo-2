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