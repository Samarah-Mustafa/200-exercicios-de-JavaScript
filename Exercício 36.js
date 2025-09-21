//Exercício 36: Usando um laço for, imprima todos os números perfeitos de 1 a 100 (um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número).
for (let num = 1; num <= 100; num++) {
    let somaDivisores = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            somaDivisores += i;
        }
    }
    if (somaDivisores === num) {
        console.log(num);
    }
}