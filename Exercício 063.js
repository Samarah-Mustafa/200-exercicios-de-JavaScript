/*Exercício 63: Escreva uma função que receba um número e retorne um array
com todos os números primos até aquele número*/
function numerosPrimos(ate) {
    const primos = [];
    for (let i = 2; i <= ate; i++) {
        if (Primo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

function Primo(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(numerosPrimos(15));