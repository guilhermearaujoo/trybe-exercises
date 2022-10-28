const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

//se não existir a chave que queremos acessar, atribuimos brazilian
const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

//por exemplo com arrays
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0