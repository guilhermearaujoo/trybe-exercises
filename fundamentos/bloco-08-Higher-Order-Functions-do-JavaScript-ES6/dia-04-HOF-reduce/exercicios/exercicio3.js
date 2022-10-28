const books = require("./data");

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// const expectedResult = 43;

function averageAge(books) {
  // escreva seu código aqui
  const sum = books.reduce(
    (acc, cur) =>{
      return acc + (cur.releaseYear - cur.author.birthYear);
    }, 0);

  console.log(sum);
  return sum / books.length;
}

console.log(averageAge(books));
