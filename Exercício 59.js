//Exercício 59: Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados.
function numerosDuplicados(array) {
    return array.map(num => num * 2);
}
console.log(numerosDuplicados([1, 2, 3, 4]));