// Exercício 83: Crie um objeto "tempo" que possui propriedades para horas, minutos e segundos, e um método para converter o tempo para segundos.
const tempo = {
  horas: 1,
  minutos: 30,
  segundos: 45,
  converterParaSegundos: function() {
    return this.horas * 3600 + this.minutos * 60 + this.segundos;
  }
};
console.log(`${tempo.horas} horas, ${tempo.minutos} minutos e ${tempo.segundos} segundos equivalem a um total de ${tempo.converterParaSegundos()} segundos`);