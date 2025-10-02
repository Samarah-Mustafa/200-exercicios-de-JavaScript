//Exercício 81: Crie um objeto representando uma conta bancária, que possui uma propriedade de saldo e métodos para depósito e saque.

const contaBancaria = {
    saldo: 0,
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    },
    sacar: function(valor) {
        if (valor > this.saldo) {
            console.log(`Saque de R$${valor} não realizado. Saldo insuficiente.`);
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        }
    }
};
contaBancaria.depositar(500);
contaBancaria.sacar(200);
contaBancaria.sacar(400);