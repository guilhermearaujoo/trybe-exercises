const fetch = require('node-fetch');

const cep = '30130-010'; 

async function getAnw() {
  
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log(error)
  }
}


getAnw();