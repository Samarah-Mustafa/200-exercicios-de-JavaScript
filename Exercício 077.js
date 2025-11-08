/*Exercício 77: Crie um objeto que represente um livro, com propriedades para o título,
autor e número de páginas. Em seguida, adicione um método ao objeto que imprima uma descrição do livro.*/
const livro = {
    titulo: "A Arte da Guerra",
    autor: "Sun Tzu",
    paginas: 130,

    descricao: function() {
        console.log(`
             Detalhes do Livro 
            ---------------------
            Título: ${this.titulo}
            Autor: ${this.autor}
            Páginas: ${this.paginas}
            ---------------------
        `);
    }
};
livro.descricao();