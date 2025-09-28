//Exercício 66: Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e um array, e retorne um novo array que contém apenas os elementos para os quais a função de callback retornou verdadeiro.
function filtrarArray(array, callback) {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        
        const deveIncluir = callback(elemento, i, array);

        if (deveIncluir === true) {
            novoArray.push(elemento);
        }
    }

    return novoArray;
}
const usuarios = [
    { nome: "Ana", ativo: true },
    { nome: "Beto", ativo: false },
    { nome: "Carla", ativo: true }
];

const ativos = filtrarArray(usuarios, usuario => usuario.ativo === true);
console.log("Usuários Ativos:", ativos);