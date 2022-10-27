const books = require('./data');
const reduceNames = require('./exercicio2');

// Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

describe('Reduce Names', () => {
  it('Crie uma string com os nomes de todas as pessoas autoras.', () => {
    expect(reduceNames(books)).toMatch(expectedResult);
  })
})