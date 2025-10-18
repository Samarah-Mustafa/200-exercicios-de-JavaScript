//Exercício 100: Dado um array e um número n, divida o array em várias sub-arrays onde cada sub-array tem no máximo n elementos.
function dividirArray(array, n) {
    const resultado = [];
    for (let i = 0; i < array.length; i += n) {
        resultado.push(array.slice(i, i + n));
    }
    return resultado;
}

const arrayExemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = dividirArray(arrayExemplo, 3);
console.log(resultado);