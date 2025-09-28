//Exercício 70: Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um array de resultados de aplicar cada função de callback ao valor.
function aplicarCallbacks(callbacks, valor) {
    return callbacks.map(callback => callback(valor));
}
const callbacks = [
    x => x + 1,
    x => x * 2,
    x => x - 3
];
const resultados = aplicarCallbacks(callbacks, 5);
console.log("Resultados:", resultados);