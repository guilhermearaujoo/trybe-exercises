// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let primos = [];
let divisores;

for(let index=2; index<=50; index+=1){
    divisores = 0;
    for(secondIndex = 2; secondIndex <= index; secondIndex+=1) {
        if(index % secondIndex == 0) {
            divisores += 1;
        }
    }
    if(divisores == 1) {
        primos.push(index);
    }
}

console.log("Maior numero primo entre 2 e 50: " + primos[primos.length - 1]);