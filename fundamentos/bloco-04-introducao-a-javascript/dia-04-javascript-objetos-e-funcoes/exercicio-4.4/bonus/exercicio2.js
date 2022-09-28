// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

function arrayOfNumbers(vector) {
let pares = [];

  for (index of vector) {
    for (i of index) {
      if (i % 2 === 0) {
        pares.push(i);
      }
    }
  }

  return pares;
}


let x = [[1,2,3], [4,5,6], [7,8,9]];
console.log(arrayOfNumbers(x)); 