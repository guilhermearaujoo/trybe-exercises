const person = {
  name: 'Jlberto',
  lastName: 'Gomes',
  age: 20,
};

// Retorna os valores em ordem crescente
const tentativa = {
  100: 'oi',
  20 : 'talvez', 
  30: 'claro',
}
console.log(Object.values(tentativa));

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};


// Isso cria um novo objeto e sobreescreve as chaves que são iguais, sempre pela última chave
const novo = Object.assign({}, person, info, family);
console.log(novo);