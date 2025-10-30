//Exercício 37: Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais.
let numero = 1;
let somaDosQuadrados = 0;

while (numero <= 10) {
  somaDosQuadrados += numero * numero;
  numero++;
}

console.log(`A soma dos quadrados dos primeiros 10 números naturais é: ${somaDosQuadrados}`);