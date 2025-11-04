//Exercício 48: Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar.
function parOuImpar(num) {
    if (num % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(parOuImpar(4));