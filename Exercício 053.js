//Exercício 53: Escreva uma função que verifique se um número é primo.
function Primo(n) {
for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        return false;
    }
}
return n > 1;
}
console.log(Primo(3));