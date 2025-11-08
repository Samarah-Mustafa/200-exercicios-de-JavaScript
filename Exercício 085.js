/*Exercício 85: Crie um objeto "quadrado" que herda as propriedades do objeto "retangulo"
e substitua o método para calcular a área.*/
const retangulo = {
    altura: 8,
    largura: 15,
    calcularArea: function() {
        return this.altura * this.largura;
    }
};

const quadrado = Object.create(retangulo);

quadrado.lado = 8;
quadrado.altura = quadrado.lado;
quadrado.largura = quadrado.lado;

quadrado.calcularArea = function() {
    return this.lado * this.lado;
};

console.log("Área do Retângulo:", retangulo.calcularArea());
console.log("Área do Quadrado:", quadrado.calcularArea());