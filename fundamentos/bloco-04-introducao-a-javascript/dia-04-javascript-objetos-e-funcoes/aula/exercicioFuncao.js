// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// Faça um programa que, dado um valor recebido como parâmetro, retorrne “positive” se esse valo for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

function adition(a, b){
  return a + b;
}

function subtraction(a, b){
  return a-b;
}

function multiply(a, b){
  return a*b;
}

function division(a, b){
  return a/b;
}

function module(a, b){
  return a%b;
}

let a = 4;
let b = 2;

console.log(adition(a, b), subtraction(a, b), multiply(a, b), division(a, b), module(a, b));


function biggerOfTwo(number1, number2){
  if(number1 >= number2){
    return number1;
  };
  return number2;
}

const number1 = Math.floor(Math.random()*100);
const number2 = Math.floor(Math.random()*100);
const number3 = Math.floor(Math.random()*100);

console.log("Biggest of" + ' ' + number1 + ' '+ "and" + ' '+ number2 + " is: " + biggerOfTwo(number1, number2));

function biggerOfThree(number1, number2, number3){
  if(number1 >= number2){
    if(number1 >= number3){
      return number1;
    } else {
      return number3;
    };
  } else {
    if(number2 >= number3) {
      return number2;
    };
  };
  return number3;
}

console.log("Biggest of " + number1 + ", " + number2 + ' and '+ number3 +" is: " + biggerOfThree(number1, number2, number3));

function trueOrFalse(param1){
  if(param1 > 0){
    return true;
  } else if(param1 < 0){
    return false;
  }
  return "zero"
}

let param1 = -100;

console.log("The number is: " + trueOrFalse(param1));

function isAtriangulo(ang1, ang2, ang3){ 

  if(ang1 > 0 && ang2 > 0 && ang3 > 0){
    if( (ang1 + ang2 + ang3) == 180){
      return true;
    };
  };
  return "ERROR: It is not a triangulo!";
}

let ang1 = 30;
let ang2 = 50; 
let ang3 = 100;

console.log("Is it a triangulo? " + isAtriangulo(ang1, ang2, ang3));