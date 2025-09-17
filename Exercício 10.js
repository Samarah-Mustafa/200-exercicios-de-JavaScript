//Exercício 10: Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

let nota1 = 8;
let nota2 = 6;
let media = (nota1 + nota2) / 2;
console.log("Média:", media);

if (media >= 7) {
    console.log("O aluno foi aprovado.");
} else {
    console.log("O aluno foi reprovado.");
}