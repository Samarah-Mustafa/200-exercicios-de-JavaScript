//Exercício 95: Dado dois arrays, retorne um novo array que é a concatenação dos dois.
function concatenarArrays(array1, array2) {
    return [...array1, ...array2];
}

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const arrayConcatenado = concatenarArrays(arrayA, arrayB);
console.log(arrayConcatenado);