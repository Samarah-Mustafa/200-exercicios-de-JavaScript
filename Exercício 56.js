//Exercício 56: Escreva uma função que retorne o maior número em um array de números.
function maiorNumero(array) {
    return Math.max(...array);
}
console.log(maiorNumero([5, 3, 8, 2, 4]));