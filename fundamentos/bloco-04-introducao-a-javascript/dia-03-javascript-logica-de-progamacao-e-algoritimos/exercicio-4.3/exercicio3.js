// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

//bubble sort
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (array[index].length < array[secondIndex].length) {
            let position = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = position;
        }
    }
}

console.log("Menor valor é: " + array[0]);
console.log("Maior valor é: " + array[array.length-1]);