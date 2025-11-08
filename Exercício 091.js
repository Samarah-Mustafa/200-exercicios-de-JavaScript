//Exercício 91: Dado um array de strings, ordene-o em ordem decrescente com base no comprimento de cada string.
function ordenarPorComprimento(arr) {
    return arr.sort((a, b) => b.length - a.length);
}

const arrayDeStrings = ["banana", "maçã", "laranja", "kiwi"];
const arrayOrdenado = ordenarPorComprimento(arrayDeStrings);
console.log(arrayOrdenado);