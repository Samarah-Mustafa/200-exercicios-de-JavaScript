//Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

let peso = 47;
let altura = 1.60;
let imc = peso / (altura * altura);
console.log("IMC:", imc);

if (imc < 18.5) {
    console.log("Abaixo do peso.");
} else if (imc < 25) {
    console.log("Peso normal.");
} else if (imc < 30) {
    console.log("Sobrepeso.");
} else {
    console.log("Obesidade.");
}