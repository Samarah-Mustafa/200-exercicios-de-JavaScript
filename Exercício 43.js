//Exercício 43: Usando um laço while, crie um programa que determine se um número é palíndromo ou não (um número é palíndromo se for igual ao seu reverso).
let numero = 232;
let numeroInvertido = 0;
let numeroOriginal = numero;

while (numero > 0) {
  let digito = numero % 10;
  numeroInvertido = numeroInvertido * 10 + digito;
  numero = Math.floor(numero / 10);
}

if (numeroOriginal === numeroInvertido) {
  console.log(`${numeroOriginal} é um palíndromo.`);
} else {
  console.log(`${numeroOriginal} não é um palíndromo.`);
}