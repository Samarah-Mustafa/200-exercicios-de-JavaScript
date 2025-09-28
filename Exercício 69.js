//Exercício 69: Escreva uma função que aceite um número e uma função de callback, e execute a função de callback o número de vezes especificado.
function executarCallbackVezes(vezes, callback) {
    for (let i = 0; i < vezes; i++) {
        callback(i);
    }
}
executarCallbackVezes(5, i => console.log("Executando callback:", i));