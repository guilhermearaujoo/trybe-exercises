const books = require('./data');

// Adicione o código do exercício aqui:
// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const formatedBookNames = (array) =>
  array.map(
    (element) => `${element.name} - ${element.genre} - ${element.author.name}`
  );

console.log(formatedBookNames(books));

