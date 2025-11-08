/* Exercício 82: Crie um objeto "circulo" que possui uma propriedade de raio
e dois métodos que calculam a área e a circunferência.*/
const circulo = {
    raio: 5,
    calcularArea: function() {
        return Math.PI * this.raio * this.raio;
    },
    calcularCircunferencia: function() {
        return 2 * Math.PI * this.raio;
    }
};
console.log(`Área do círculo: ${circulo.calcularArea().toFixed(2)}`);
console.log(`Circunferência do círculo: ${circulo.calcularCircunferencia().toFixed(2)}`);