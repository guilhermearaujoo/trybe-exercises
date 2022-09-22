// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// Some todos os valores contidos no array e imprima o resultado;

// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let med;
let maior = numbers[0];
let impar = 0;
let menor = numbers[0];
let array25 = [];

for (let index of numbers) {
    console.log(index);
    sum += index;
    if (index > maior) {
        maior = index;
    }
    if (index < menor) {
        menor = index;
    }
    if(index%2 != 0 ) {
        impar += 1;
    }
}

console.log("SOMA: " + sum);

med = sum/numbers.length;
console.log("MÉDIA: " + med);

if(med > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

console.log("MAIOR VALOR: " + maior);
console.log("MENOR VALOR: " + menor);
if (impar > 0) {
    console.log("Numero de valores impares: " + impar);
} else {
    console.log("Nenhum valor impar encontrado");
}


for (let i=1; i <= 25; i+=1) {
    array25.push(i);
    console.log(i + "/" + 2 + " = " + i/2);
}

console.log(array25);
