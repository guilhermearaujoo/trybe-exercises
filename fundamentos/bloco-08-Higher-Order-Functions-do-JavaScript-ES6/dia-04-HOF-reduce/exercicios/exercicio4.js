const books = require('./data');

// Encontre o livro com o maior nome.

// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

function longestNamedBook(books) {
  // escreva seu código aqui
  return books.reduce((acc, cur) => 
    cur.name.length > acc.name.length ? cur : acc);
}

console.log(longestNamedBook(books));