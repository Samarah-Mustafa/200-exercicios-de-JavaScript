//Exercício 74: Escreva uma função de alta ordem que aceite uma função de callback e um array, e retorne um novo array que contém os resultados de aplicar a função de callback a cada elemento do array, sem alterar o array original.
function minhaFuncaoMapeamento(callback, arr) {
    const novoArray = [];

    for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i];
        const resultado = callback(elemento, i, arr);
        novoArray.push(resultado);
    }

    return novoArray;
}

const numeros = [2, 4, 6, 8];
const duplicar = (num) => num * 2;
const paraString = (num, index) => `Item ${index + 1}: ${num} é o número.`;

const arrayDuplicado = minhaFuncaoMapeamento(duplicar, numeros);
const arrayDeStrings = minhaFuncaoMapeamento(paraString, numeros);

console.log("Array Original:", numeros);
console.log("Array Duplicado:", arrayDuplicado);
console.log("Array de Strings:", arrayDeStrings);