//Exercício 14: Escreva um programa que verifica se um ano é bissexto.
function AnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    }
    return false;
}

let ano = 2025;
if (AnoBissexto(ano)) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}