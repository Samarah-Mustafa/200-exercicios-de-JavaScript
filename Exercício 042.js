//Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal.
let numeroBinario = '111';
let numeroDecimal = 0;
let comprimento = numeroBinario.length;

for (let i = 0; i < comprimento; i++) {
  let digito = parseInt(numeroBinario[comprimento - 1 - i]);
  numeroDecimal += digito * Math.pow(2, i);
}
console.log(`O número decimal é: ${numeroDecimal}`);