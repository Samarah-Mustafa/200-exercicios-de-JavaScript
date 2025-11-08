//Exercício 99: Dado um array, retorne um novo array com todas as combinações possíveis de pares de elementos.
function combinarPares(array) {
    const combinacoes = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            combinacoes.push([array[i], array[j]]);
        }
    }
    return combinacoes;
}

const arrayExemplo = [1, 2, 3, 4];
const resultado = combinarPares(arrayExemplo);
console.log(resultado);