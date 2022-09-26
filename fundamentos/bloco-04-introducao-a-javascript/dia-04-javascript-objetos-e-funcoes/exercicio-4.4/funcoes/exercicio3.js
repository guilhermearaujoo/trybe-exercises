// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

function isPalindromo(frase){
  let inverseFrase = frase.split('').reverse().join('');

  if (inverseFrase == frase) {
    return true;
  } 
  return false;
}

console.log(isPalindromo('desenvolvimento'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.

function biggestIndex(array) {
  let maior = array[0];
  let position = 0;

  for(let index in array) {
    if(array[index] > maior) {
      maior = array[index];
      position = index;
    }
  }

  return position;
}

let teste = [2, 3, 6, 7, 10, 1];
console.log('Indice do maior valor: ' + biggestIndex(teste));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function smallestIndex(array) {
  let menor = array[0];
  let position = 0;

  for(let index in array) {
    if(array[index] < menor) {
      menor = array[index];
      position = index;
    }
  }

  return position;
}

let teste2 = [2, 4, 6, 7, 10, 0, -3];
console.log('Indice do menor valor: ' + smallestIndex(teste2));