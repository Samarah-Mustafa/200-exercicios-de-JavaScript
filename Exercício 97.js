//Exercício 97: Dado um array, encontre o elemento que aparece mais vezes.
const encontrarMaisFrequente = (arr) => {
    const contagem = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(contagem).reduce((a, v) => (v[1] > a[1] ? v : a), [null, 0])[0];
};

const array1 = [1, 5, 2, 5, 3, 5, 4, 5, 5];
const array2 = ["banana", "maçã", "laranja", "banana", "kiwi", "banana"];

console.log(`Array 1: O mais frequente é ${encontrarMaisFrequente(array1)}`);
console.log(`Array 2: O mais frequente é ${encontrarMaisFrequente(array2)}`);