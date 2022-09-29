// Crie um irmão para elementoOndeVoceEsta.

let pai = document.getElementById('pai');

let irmaoElementoOndeVoceEsta = document.createElement('p');

irmaoElementoOndeVoceEsta.innerHTML = "Eu sou o irmão de ondeVoceEsta";

pai.appendChild(irmaoElementoOndeVoceEsta);


// Crie um filho para elementoOndeVoceEsta.

let ondeVoceEsta = pai.children[1];

let filhoOndeVoceEsta = document.createElement('section');

filhoOndeVoceEsta.innerHTML ='Eu sou o filho de onde você está';

ondeVoceEsta.appendChild(filhoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.

let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;

let filhoDoFilhoDoFilho = document.createElement('section');

filhoDoFilhoDoFilho.innerHTML = 'Filho do primeiro filho do filho';

primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

console.log(filhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling);