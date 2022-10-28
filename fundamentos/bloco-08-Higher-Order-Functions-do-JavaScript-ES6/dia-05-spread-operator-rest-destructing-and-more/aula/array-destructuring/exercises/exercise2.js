let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
const [,,, ...newArray] = numerosPares;
console.log(newArray);

//or changing numerosPares itself
[,,, ...numerosPares] = numerosPares;
console.log(newArray);