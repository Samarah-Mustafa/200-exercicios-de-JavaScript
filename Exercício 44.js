//Exercício 44: Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.
let matriz1 = [
    [10, 20, 30], 
    [40, 50, 60]
];

let matriz2 = [
    [1, 2, 3], 
    [4, 5, 6]
];

let soma = [];
let i = 0;

do {
    let j = 0;
    soma[i] = [];
    do {
        soma[i][j] = matriz1[i][j] + matriz2[i][j];
        j++;
    } while (j < matriz1[i].length);
    i++;
} while (i < matriz1.length);

console.log(`A soma das matrizes é ${JSON.stringify(soma)}`);