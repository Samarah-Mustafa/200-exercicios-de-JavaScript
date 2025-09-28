//Exercício 60: Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado.
function numerosAoQuadrado(array) {
    return array.map(num => num ** 2);
}
console.log(numerosAoQuadrado([1, 2, 3, 4]));