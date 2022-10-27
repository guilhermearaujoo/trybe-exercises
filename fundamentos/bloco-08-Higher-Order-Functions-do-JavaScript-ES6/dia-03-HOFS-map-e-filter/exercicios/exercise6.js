// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const books = require('./data');

const oldBooks = (array) => array.filter((element) => {
  const date = new Date()
  return (date.getFullYear() - element.releaseYear > 60)
}).map((element) => element.name);

console.log(oldBooks(books));