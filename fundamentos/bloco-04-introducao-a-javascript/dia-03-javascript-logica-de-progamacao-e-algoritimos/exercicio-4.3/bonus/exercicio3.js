// Agora inverta o lado do triângulo

let n = 5;
let asteriscos = new Array(n).fill(" ");
let asteriscosString = "";

for(let index=n-1; index>=0; index -= 1){
    asteriscos[index] = "*";
    asteriscosString = asteriscos.join("");
    console.log(asteriscosString);
}