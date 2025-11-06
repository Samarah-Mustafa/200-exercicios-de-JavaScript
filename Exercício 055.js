//Exercício 55: Escreva uma função que retorne o menor número em um array de números.
function menorNumero(array) {
    return Math.min(...array);
}
console.log(menorNumero([5, 3, 8, 2, 4]));