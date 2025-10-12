//Exercício 87: Dado dois arrays, um com vários números pares e outro com números ímpares, combine-os e em seguida, filtre apenas os números que são múltiplos de 5.
const arrayPares = [2, 4, 10, 12, 20, 30, 8, 16];
const arrayImpares = [1, 5, 15, 7, 25, 3, 11, 35];

const arrayCombinado = [...arrayPares, ...arrayImpares];

const multiplosDeCinco = arrayCombinado.filter(numero => numero % 5 === 0);

console.log("Array de números pares:", arrayPares);
console.log("Array de números ímpares:", arrayImpares);
console.log("Array combinado:", arrayCombinado);
console.log("Números múltiplos de 5 no array combinado:", multiplosDeCinco);