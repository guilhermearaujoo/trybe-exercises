const fetch = require('node-fetch');

fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(`${data.quote} \n${data.author}`));

// npm install node-fetch@2 
