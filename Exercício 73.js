//Exercício 73: Escreva uma função de alta ordem que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, a cada "n" milissegundos.
function aplicarCallbacksComIntervalo(intervaloMs, callbacks, valorInicial) {
    return new Promise((resolve) => {
        let valorAtual = valorInicial;
        let indiceCallback = 0;

        const idIntervalo = setInterval(() => {
            if (indiceCallback < callbacks.length) {
                valorAtual = callbacks[indiceCallback](valorAtual);
                console.log("Callback aplicada. Valor atual:", valorAtual);
                indiceCallback++;
            } else {
                clearInterval(idIntervalo);
                resolve(valorAtual);
            }
        }, intervaloMs);
    });
}

const funcoesCallback = [
    num => num * 2,
    num => num + 5,
    num => Math.pow(num, 2)
];

const valorPartida = 1;
const atrasoMs = 1500;

console.log("Iniciando a aplicação das callbacks...");

aplicarCallbacksComIntervalo(atrasoMs, funcoesCallback, valorPartida)
    .then(resultadoFinal => {
        console.log("---");
        console.log("Resultado final da aplicação assíncrona:", resultadoFinal);
    });

console.log("O programa principal continua rodando...");