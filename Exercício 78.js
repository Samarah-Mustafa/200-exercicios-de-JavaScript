//Exercício 78: Crie um objeto "cachorro" com propriedades para raça, nome e idade. Adicione um método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7).
const cachorro = {
    nome: "Thor",
    raca: "Pastor Alemão",
    idade: 5,

    idadeHumanaDescricao: function() {
        const idadeHumana = this.idade * 7;
        
        console.log(`
            Detalhes do Cachorro
            -------------------------
            Nome: ${this.nome}
            Raça: ${this.raca}
            Idade (anos de cão): ${this.idade}
            Idade (anos humanos): ${idadeHumana}
            -------------------------
        `);
    }
};

cachorro.idadeHumanaDescricao();