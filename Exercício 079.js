/*Exercício 79: Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano
e velocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade atual.*/
const carro = {
    marca: "Ford",
    modelo: "Focus",
    ano: 2020,
    velocidadeAtual: 0,

    acelerar: function(deltaVelocidade) {
        this.velocidadeAtual += deltaVelocidade;
        console.log(`
             Acelerando...
            A velocidade aumentou para ${this.velocidadeAtual} km/h.
        `);
    },

    frear: function(deltaFreio) {
        this.velocidadeAtual -= deltaFreio;
        if (this.velocidadeAtual < 0) {
            this.velocidadeAtual = 0;
        }
        console.log(`
             Freando...
            A velocidade reduziu para ${this.velocidadeAtual} km/h.
        `);
    },

    obterVelocidadeAtual: function() {
        console.log(`
             Status
            O ${this.modelo} está a ${this.velocidadeAtual} km/h.
        `);
    }
};

carro.obterVelocidadeAtual();
carro.acelerar(50);
carro.acelerar(30);
carro.frear(25);
carro.obterVelocidadeAtual();