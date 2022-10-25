const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947(arr, param) {
  // escreva aqui o seu código
  const person = arr.find((element) => element.author.birthYear === param);
  return person.author.name;
}

console.log(authorBornIn1947(books, 1947));

// Retorne o nome do livro de menor nome.
function smallerName(arr) {
  let nameBook = arr[0].name;
  // escreva aqui o seu código
  arr.forEach((element) =>
    element.name.length < nameBook.length
      ? (nameBook = element.name)
      : (nameBook = nameBook)
  );
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(books));

// Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(arr, size) {
  // escreva seu código aqui
  return arr.find(element => element.name.length === size);
}

console.log(getNamedBook(books, 26));

const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];


// Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(arr) {
  // escreva aqui seu código
  arr.sort((a, b) => b.releaseYear - a.releaseYear);
}

booksOrderedByReleaseYearDesc(books);

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX(arr) {
  // escreva seu código aqui
  return arr.every((element) => element.author.birthYear > 1900 && element.author.birthYear < 2000);
}

console.log(everyoneWasBornOnSecXX(books));


// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
// const expectedResult = true;

function someBookWasReleaseOnThe80s(arr) {
  // escreva seu código aqui
  return arr.some((element) => element.releaseYear > 1979 && element.releaseYear <= 1989);
}

console.log(someBookWasReleaseOnThe80s(books));

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

function authorUnique(arr) {
  // escreva seu código aqui
  return arr.some((element, position, arr) => {
    for(let index = position + 1; index < arr.length; index += 1) {
      if (element.author.birthYear === arr[index].author.birthYear) return true;
    }
    return false;
  })
}

console.log(authorUnique(books));