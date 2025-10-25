//Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.
function Palindromo(palavra) {
    let palavraInvertida = palavra.split("").reverse().join("");
    return palavra === palavraInvertida;
}

let palavra = "arara";
if (Palindromo(palavra)) {
    console.log(palavra + " é um palíndromo.");
} else {
    console.log(palavra + " não é um palíndromo.");
}