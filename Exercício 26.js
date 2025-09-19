//Exercício 26: Usando um laço do-while, imprima todos os números ímpares de 1 a 20.
let i = 1;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= 20);