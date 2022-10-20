const hydrate = (frase) => {

  let sum = 0;
  const numbers = frase.match(/\d/g).join("").split('');
  numbers.forEach(element => {
    sum += Number(element); 
  });

  if(sum === 1) {
    return '1 copo de água';
  }

  return `${sum} copos de água`;
}

module.exports = hydrate;