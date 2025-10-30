//Exercício 28: Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.
let i = 1;
let soma = 0;

while (i <= 100) {
  soma += i;
  i++;
}

console.log(`A soma de todos os números de 1 a 100 é: ${soma}`);