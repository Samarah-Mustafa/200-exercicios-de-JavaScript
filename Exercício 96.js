//Exercício 96: Dado dois arrays, verifique se o segundo array é um subarray do primeiro.
const verificarSubarray = (array1, array2) => {
    if (array2.length === 0) return true;
    
    return array1.some((_, i) => 

        array1.slice(i, i + array2.length).every((val, j) => val === array2[j])
    );
};

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [2, 3, 4];

console.log(`[${arrayA}] contém [${arrayB}]: ${verificarSubarray(arrayA, arrayB)}`);