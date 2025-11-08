/*Exercício 94: Dado um array de strings e um número n, retorne um novo array
contendo apenas as strings que têm mais de n caracteres.*/
function filtrarPorComprimento(array, n) {
    return array.filter(item => item.length > n);
}

const arrayDeStrings = ["banana", "maçã", "laranja", "kiwi"];
const resultado = filtrarPorComprimento(arrayDeStrings, 5);
console.log(resultado);