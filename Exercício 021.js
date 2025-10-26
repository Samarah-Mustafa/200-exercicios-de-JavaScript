//Exercício 21: Escreva um programa que determina a estação do ano com base no mês.
let mes = 9;

let estacao;

if (mes === 12 || mes === 1 || mes === 2) {
    estacao = "Verão";
} else if (mes >= 3 && mes <= 5) {
    estacao = "Outono";
} else if (mes >= 6 && mes <= 8) {
    estacao = "Inverno";
} else if (mes >= 9 && mes <= 11) {
    estacao = "Primavera";
} else {
    estacao = "Mês inválido";
}

console.log("Estação do ano: " + estacao);