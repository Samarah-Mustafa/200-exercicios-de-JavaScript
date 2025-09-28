//Exercício 66: Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e um array, e retorne um novo array que contém apenas os elementos para os quais a função de callback retornou verdadeiro.
function filtrarArray(array, callback) {
    return array.filter(callback);
}
let array = [1, 2, 3, 4, 5];
let callback = num => num % 2 === 0;
console.log(filtrarArray(array, callback));