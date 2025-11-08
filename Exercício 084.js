/* Exercício 84:  Crie um objeto "retangulo" que possui propriedades para altura e largura,
e um método para calcular a área.*/
const retangulo = {
    altura: 8,
    largura: 15,

    calcularArea: function() {
        return this.altura * this.largura;
    }
};

const area = retangulo.calcularArea();

console.log(`Altura: ${retangulo.altura}`);
console.log(`Largura: ${retangulo.largura}`);
console.log(`Área calculada: ${area}`);