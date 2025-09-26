//Exercício 50: Escreva uma função que aceite uma string como argumento e retorne a string invertida.
function inverterString(string) {
    return string.split("").reverse().join("");
}
console.log(inverterString("Olá, Mundo!"));