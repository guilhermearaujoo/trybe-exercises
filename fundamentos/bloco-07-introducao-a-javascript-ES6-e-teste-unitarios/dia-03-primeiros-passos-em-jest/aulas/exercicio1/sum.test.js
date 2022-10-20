const sum = require('./sum');

test('Verifica se a soma de 1 e 2 é 3', () => {
  expect(sum(2, 3)).toEqual(5);
});