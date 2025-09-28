//Exercício 68: Escreva uma função de alta ordem que aceite um array de números e uma função de callback, e retorne um novo array que contém apenas os números do array original que satisfazem a condição da função de callback.
function filtrarNumeros(array, callback) {
    return array.filter(callback);
}
let numeros = [10, 15, 20, 25, 30, 35, 40];
let callback = numero => numero > 20;
let numerosFiltrados = filtrarNumeros(numeros, callback);
console.log("Números filtrados:", numerosFiltrados);