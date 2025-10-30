//Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.
let numeroPensado = parseInt(prompt("Pense em um número entre 1 e 100 e digite aqui:"));
let mínimo = 1;
let máximo = 100;
let palpite;
let tentativas = 0;

while (mínimo <= máximo) {
    palpite = Math.floor((mínimo + máximo) / 2);
    tentativas++;

    if (palpite === numeroPensado) {
        console.log(`O número é ${numeroPensado}, e acertei em ${tentativas} tentativas.`);
        break;
    } else if (palpite < numeroPensado) {
        mínimo = palpite + 1;
    } else {
        máximo = palpite - 1;
    }
}

if (mínimo > máximo) {
    console.log(`O número ${numeroPensado} não está entre 1 e 100.`);
}