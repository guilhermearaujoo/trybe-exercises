// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

// Exemplo:
// Copiar
//   longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
// Dica: Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().

const longestWord = phrase => phrase.split(' ').sort((a, b) => {
  let x = a.length, y = b.length;
  return x==y ? 0 : y > x ? 1 : -1;
})[0];

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));
