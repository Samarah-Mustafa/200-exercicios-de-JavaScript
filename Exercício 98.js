//Exercício 98: Dado um array de strings e um array de palavras proibidas, retorne um novo array sem as palavras proibidas.
function removerPalavrasProibidas(textos, proibidas) {
    return textos.filter(palavra => !proibidas.includes(palavra));
}

const frases = ["sol", "chuva", "vento", "nuvem", "frio"];
const banidas = ["chuva", "vento", "frio"];

const resultado = removerPalavrasProibidas(frases, banidas);

console.log(resultado);