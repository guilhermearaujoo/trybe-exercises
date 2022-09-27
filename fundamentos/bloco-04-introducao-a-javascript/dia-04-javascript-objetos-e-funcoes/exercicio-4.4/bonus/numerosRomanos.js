// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

// Dicas:

// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

let numRomanos = {
  "I": 1,
  "IV": 4,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000, 
}

function decToRoman(converter){
  let listConverter = converter.split('');
  
  // verifica se as letras são validas
  for(let index of listConverter){
    let isDecimal = false;
    for(let key in numRomanos){
      if(key == index){
        isDecimal = true;
      }
    }
    //retorna erro se for um numero invalido
    if(!isDecimal){
      return "ERROR: Must be a valid a ROMAN NUMBER";
    }
  }

  //verifica se é um numero ja conhecido
  if(listConverter.length == 2){

    let answer = listConverter.join('');
    if(answer === "XM"){
      return "ERROR: Must be a valid a ROMAN NUMBER, MX not allowed";
    }

    for(key in numRomanos) {
      if(answer === key){
        return numRomanos[key];
      }
    }
  }

  let sum = 0;
  for(index of listConverter){
    sum += numRomanos[index];
  }

  return sum;
  
}

console.log(decToRoman('XIII'));
