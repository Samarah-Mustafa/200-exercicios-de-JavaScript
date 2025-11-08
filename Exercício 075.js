/*Exercício 75: Escreva uma função de alta ordem que aceite um array de funções de callback
e um valor, e retorne um novo array que contém os resultados de aplicar a função de callback
ao valor, na ordem inversa.*/
function aplicarInverso(callbacks, valorInicial) {
    const callbacksInvertidas = [...callbacks].reverse();

    const resultados = callbacksInvertidas.map(callback => {
        return callback(valorInicial);
    });

    return resultados;
}

const funcoes = [
    (num) => num + 10,
    (num) => num * 2,
    (num) => num - 5
];

const valorDeEntrada = 100;

const resultadosInversos = aplicarInverso(funcoes, valorDeEntrada);

console.log("Array de Resultados Inversos:", resultadosInversos);