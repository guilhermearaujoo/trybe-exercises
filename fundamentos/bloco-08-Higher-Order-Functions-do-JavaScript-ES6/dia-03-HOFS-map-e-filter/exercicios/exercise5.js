const books = require('./data');

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasyOrScienceFictionAuthors = (array) => array.filter((element) => (element.genre === "Ficção Científica" || element.genre === "Fantasia")).map((element) => element.author.name).sort();

console.log(fantasyOrScienceFictionAuthors(books));