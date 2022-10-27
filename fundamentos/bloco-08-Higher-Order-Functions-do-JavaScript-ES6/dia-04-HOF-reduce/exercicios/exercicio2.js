
// Adicione o código do exercício aqui:

function reduceNames(array) {
  // escreva seu código aqui
  const ans =  array.reduce((acc, cur) => acc += `, ${cur.author.name}`, array[0].author.name);
  return `${ans}.`
}

module.exports = reduceNames;