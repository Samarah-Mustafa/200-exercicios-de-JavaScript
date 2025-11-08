/*Exercício 89: Dada uma string com várias palavras separadas por espaços,
transforme-a em um array e depois retorne a palavra mais longa.*/

function encontrarPalavraMaisLonga(str) {
    const palavras = str.split(' ');
    let palavraMaisLonga = '';
    let tamanhoMaximo = 0;

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > tamanhoMaximo) {
            tamanhoMaximo = palavras[i].length;
            palavraMaisLonga = palavras[i];
        }
    }

    return palavraMaisLonga;
}
const frase = "Encontre a palavra mais longa nesta frase de exemplo";
const resultado = encontrarPalavraMaisLonga(frase);
console.log(`A palavra mais longa é: ${resultado}`);