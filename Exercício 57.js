//Exercício 57: Escreva uma função que retorne a soma de todos os números ímpares em um array de números.
function somaImpares(array) {
    return array.reduce((soma, num) => {
        if (num % 2 !== 0) {
            soma += num;
        }
        return soma;
    }, 0);
}
console.log(somaImpares([5, 3, 8, 2, 4]));