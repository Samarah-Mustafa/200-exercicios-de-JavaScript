//Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário.
let numeroDecimal = 7;
let numeroBinario = '';

do {
  numeroBinario = (numeroDecimal % 2) + numeroBinario;
  numeroDecimal = Math.floor(numeroDecimal / 2);
} while (numeroDecimal > 0);

console.log(`O número binário é: ${numeroBinario}`);