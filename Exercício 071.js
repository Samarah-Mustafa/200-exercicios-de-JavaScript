/*Exercício 71: Escreva uma função que aceite uma função de callback e um número,
e execute a função de callback após um certo número de milissegundos especificados pelo número.*/
function executarAposDelay(callback, delay) {
    setTimeout(callback, delay);
}
let callback = () => {
    console.log("Executando após o delay!");
}

executarAposDelay(callback, 2000);