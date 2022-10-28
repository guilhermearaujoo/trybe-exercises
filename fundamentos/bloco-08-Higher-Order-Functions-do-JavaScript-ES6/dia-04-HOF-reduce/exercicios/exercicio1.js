const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];


function flatten(array) {
  // escreva seu código aqui
  return array.reduce((acc, cur) => acc.concat(cur),[]);
}


console.log(flatten(arrays));
// Utilize o reduce para transformar uma matriz em um array.