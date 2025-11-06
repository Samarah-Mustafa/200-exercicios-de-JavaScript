/*Exercício 65: Escreva uma função que aceite um array de números e uma função de callback
e retorne a soma de todos os números do array após a aplicação da função de callback*/
function somarComCallback(array, callback) {
    return array.map(callback).reduce((a, b) => a + b, 0);
}
let array = [1, 2, 3, 4];
let callback = num => num * 2;
console.log(somarComCallback(array, callback));