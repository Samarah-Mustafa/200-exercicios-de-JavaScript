/*Exercício 80: Crie um objeto que represente um estudante, com propriedades para o nome,
notas de várias matérias e um método para calcular a média das notas.*/
const estudante = {
    nome: "Gabriella Ellen",
    materiaNotas: {
        Matemática: [8.0, 7.5, 9.0, 8.5],
        Português: [6.5, 7.0, 7.0, 7.5],
        História: [9.5, 9.5, 9.0, 10.0],
        Ciências: [5.0, 6.0, 7.0, 8.0]
    },

    calcularMediasPorMateria: function() {
        const mediasFinais = {};
        let somaTotalDasNotas = 0;
        let contadorTotalDeNotas = 0;

        for (const materia in this.materiaNotas) {
            
            const notas = this.materiaNotas[materia];
            
            const somaDasNotas = notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);
            
            const media = somaDasNotas / notas.length;
            
            mediasFinais[materia] = media.toFixed(2);
            
            somaTotalDasNotas += somaDasNotas;
            contadorTotalDeNotas += notas.length;
        }

        const mediaGeral = somaTotalDasNotas / contadorTotalDeNotas;

        console.log(`
    Boletim de ${this.nome} 
    -----------------------------
    MÉDIA FINAL POR MATÉRIA:
            
        `);
        
        for (const materia in mediasFinais) {
            console.log(`\t${materia.padEnd(12)}: ${mediasFinais[materia]}`);
        }
        
        console.log(`
    -----------------------------
    MÉDIA GERAL: ${mediaGeral.toFixed(2)}
    -----------------------------
        `);
    }
};

estudante.calcularMediasPorMateria();