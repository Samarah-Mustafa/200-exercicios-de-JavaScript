//Exercício 58: Escreva uma função que retorne a soma de todos os números pares em um array de números.
function somaPares(array) {
    return array.reduce((soma, num) => {
        if (num % 2 === 0) {
            soma += num;
        }
        return soma;
    }, 0);
}
console.log(somaPares([5, 3, 8, 2, 4]));