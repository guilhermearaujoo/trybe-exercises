const books = require('./data');

// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const fantasyOrScienceFiction = (array) => {
  return array.filter((element)=> element.genre === "Fantasia" || element.genre === "Ficção Científica")
} 

console.log(fantasyOrScienceFiction(books));