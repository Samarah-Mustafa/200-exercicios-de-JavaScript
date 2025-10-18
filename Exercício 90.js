//Exercício 90: Dado um array que contém vários elementos duplicados, crie uma função que remova todas as duplicatas e retorne um array com elementos únicos.
function removerDuplicatas(arr) {
    return [...new Set(arr)];
}

const arrayComDuplicatas = [1, 2, 3, 2, 4, 3, 5];
const arraySemDuplicatas = removerDuplicatas(arrayComDuplicatas);
console.log(arraySemDuplicatas);