// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let asteriscos = '*';
for(let index=0; index<n; index+= 1){
    console.log(asteriscos);
    asteriscos += '*';
}