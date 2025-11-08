/*Exercício 86:  Crie um objeto "livro" que possui propriedades para o título,
autor e número de páginas, e um método para exibir o livro na console.*/
const livro = {
    titulo: "Lógica de Programação e Algoritmos com Javascript - 2ª Edição",
    autor: "Edécio Fernando Iepsen",
    paginas: 352,
    capaUrl: "https://m.media-amazon.com/images/I/71X7hMhMEUL._SL1500_.jpg", 

    exibirLivro: function() {
        console.log("-------------------------------");
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
        console.log(`Capa (Link): ${this.capaUrl}`); 
        console.log("-------------------------------");
    }
};

livro.exibirLivro();