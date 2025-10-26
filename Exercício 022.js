//Exercício 22: Escreva um programa que determina o número de dias em um mês, considerando ano bissexto.
let mes = 2;
let ano = 2024;
let dias;

function Bissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

if (mes === 2) {
    dias = Bissexto(ano) ? 29 : 28;
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    dias = 30;
} else if (mes >= 1 && mes <= 12) {
    dias = 31;
} else {
    dias = "Mês inválido";
}
console.log("O mês " + mes + " do ano " + ano + " tem " + dias + " dias.");