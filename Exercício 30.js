//Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100.
for (let num = 2; num <= 100; num++) {
    let Primo = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            Primo = false;
            break;
        }
    }
    if (Primo) {
        console.log(num);
    }
}