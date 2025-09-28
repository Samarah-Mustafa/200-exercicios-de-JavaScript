//Exercício 61: Escreva uma função que receba um array de números e retorne um novo array com a raiz quadrada de todos os números.
function numerosRaizQuadrada(array) {
    return array.map(num => Math.sqrt(num));
}
console.log(numerosRaizQuadrada([1, 4, 9, 16]));