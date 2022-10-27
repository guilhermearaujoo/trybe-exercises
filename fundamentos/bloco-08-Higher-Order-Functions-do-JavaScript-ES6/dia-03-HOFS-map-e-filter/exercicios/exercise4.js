const books = require('./data');

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const date = new Date();

const oldBooksOrdered = (array) => array.filter((element) => ((date.getFullYear() - element.releaseYear) > 60))

console.log(oldBooksOrdered(books));