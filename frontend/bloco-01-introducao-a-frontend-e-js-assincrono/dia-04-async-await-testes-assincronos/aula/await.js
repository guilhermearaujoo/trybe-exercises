const fetch = require('node-fetch');

async function cep() {
  const cep = '30130-010'; 
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  console.log(data);
}

cep();