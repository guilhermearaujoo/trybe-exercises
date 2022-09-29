// Acesse o elemento elementoOndeVoceEsta.

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(ondeVoceEsta);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let pai = ondeVoceEsta.parentElement
pai.style.color = 'green';
console.log(pai);
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;

primeiroFilhoDoFilho.innerHTML = 'Olá eu sou o primeiro filho do meu pai.'

// Acesse o primeiroFilho a partir de pai.

console.log(pai.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(ondeVoceEsta.previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(ondeVoceEsta.nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(ondeVoceEsta.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.
console.log(pai.children[2]);