// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const books = require("./data");

const authorWith3DotsOnName = (array) => {
  return array.find((element) =>
    element.author.name[1] === "." 
    && element.author.name[4] === "." 
    && element.author.name[7] === ".").name;
};

console.log(authorWith3DotsOnName(books));
