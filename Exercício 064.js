//Exercício 64: Escreva uma função que receba uma string e retorne o número de palavras na string.
function contarPalavras(frase) {
    return frase.split(' ').length;
}
console.log(contarPalavras("Olá mundo, como vai você?"));