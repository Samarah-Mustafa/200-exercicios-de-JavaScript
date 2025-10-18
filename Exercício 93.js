//Exercício 93: Dado um array de números, encontre a mediana.
function encontrarMediana(numeros) {
    const numerosOrdenados = numeros.slice().sort((a, b) => a - b);
    const meio = Math.floor(numerosOrdenados.length / 2);
    return numerosOrdenados.length % 2 === 0
        ? (numerosOrdenados[meio - 1] + numerosOrdenados[meio]) / 2
        : numerosOrdenados[meio];
}
const numeros = [3, 1, 4, 2, 5];
const mediana = encontrarMediana(numeros);
console.log(`A mediana é: ${mediana}`);