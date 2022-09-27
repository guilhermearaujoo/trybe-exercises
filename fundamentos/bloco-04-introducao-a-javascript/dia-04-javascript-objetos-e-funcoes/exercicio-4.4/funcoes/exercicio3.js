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

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function biggestName(arrayOfNames){
  let name = arrayOfNames[0];
  for(let index of arrayOfNames){
    if(index.length > name.length){
      name = index;
    }
  }

  return name;
}

let teste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log('The bioggest name is ' + biggestName(teste3));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.

function biggestIn(array){
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

function mostSeen(array){
  let arrayOfRepeat = [];
  

  for(let index of array){

    let repeat = 0;
    for(let subIndex of array){
      if(index == subIndex){
        repeat += 1;
      }
    }
    arrayOfRepeat += repeat;
  }

  return array[biggestIn(arrayOfRepeat)];
}


let teste4 = [2, 3, 2, 5, 8, 2, 3];

console.log('O numero que mais se repete é: ' + mostSeen(teste4));

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.

// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somatorio(natural){
  let soma = 0;
  if(natural > 0){
    while(natural!=0){
      soma += natural;
      natural -= 1;
    }
    return soma;
  } else {
    if (natural === 0){
      return 0;
    } else {
      return "ERROR: Number must be bigger than 0";
    }
  }
}

let num = Math.floor(Math.random()*100);
console.log("O somatório de " + num + " é " + somatorio(num));

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'

// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false

function verificaFimPalavra(word, ending){
  listWord = word.split('');
  listEnding = ending.split('');

  let position = listEnding.length;
  while(position != 0){
    if(listWord[listWord.length - position] != listEnding[listEnding.length - position]) {
      return false;
    }
    position -= 1;
  }
  return true;
}

console.log(verificaFimPalavra('trybe', 'be'));