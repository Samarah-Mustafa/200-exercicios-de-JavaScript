// Exercício 38: Usando um laço do-while, imprima a soma dos cubos dos primeiros 10 números naturais.
let somaCubos = 0;
let i = 1;

do {
  somaCubos += i * i * i;
  i++;
} while (i <= 10);

console.log(somaCubos);