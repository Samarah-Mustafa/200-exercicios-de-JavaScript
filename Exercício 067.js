/*Exercício 67: Escreva uma função que aceite uma função de callback e um array de arrays,
e retorne um novo array que contém os resultados de aplicar a função de callback a cada array*/
function aplicarCallbackEmArrays(arrayDeArrays, callback) {
    return arrayDeArrays.map(callback);
}
const arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const resultado = aplicarCallbackEmArrays(arrays, array => array.reduce((a, b) => a + b, 0));
console.log("Resultado:", resultado);