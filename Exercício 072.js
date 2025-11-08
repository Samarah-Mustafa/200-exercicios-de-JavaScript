/*Exercício 72: Escreva uma função que aceite um número, um array de funções de callback
e um valor inicial, e retorne o resultado final após a aplicação de todas as funções
de callback no valor inicial, o número de vezes especificado.*/
function aplicarCallbacks(numero, callback, valorInicial) {
    let resultado = valorInicial;
    for (let i = 0; i < numero; i++) {
       callback.forEach(funcao => {
           resultado = funcao(resultado);
       });
    }
    return resultado;
}       
let callback = [num => num * 2, num => num + 1];
let valorInicial = 1;
console.log(aplicarCallbacks(5, callback, valorInicial));