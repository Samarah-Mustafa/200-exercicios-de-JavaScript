/*Exercício 92: Dado um array de objetos que têm várias propriedades,
crie uma função que retorne um novo array contendo apenas os valores de uma propriedade específica.*/
function extrairPropriedade(array, propriedade) {
    return array.map(objeto => objeto[propriedade]);
}

const arrayDeObjetos = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 28 }
];
const nomes = extrairPropriedade(arrayDeObjetos, "nome");
console.log(nomes);
const idades = extrairPropriedade(arrayDeObjetos, "idade");
console.log(idades);