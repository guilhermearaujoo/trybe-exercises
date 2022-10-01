const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// // - Copie esse arquivo e edite apenas ele;
// //  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// // - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

// let liList = document.getElementsByTagName('li');

// for(let index of liList) {
//   index.addEventListener('click', transformItem(liList));
// }

// function transformItem(liList){

//   event.target.className = 'tech';
//   for(let index of liList) {
//     if(index != event.target) {
//       index.className = '';
//     }
//   }
    
// }


let li1 = document.getElementById('first-li');
let li2 = document.getElementById('second-li');
let li3 = document.getElementById('third-li');

function clicadoTech () {

  let variavel = event.target
  let next;
  let previous;

  switch (variavel.id) {
    case 'first-li':
      next = li2;
      previous = li3;
      break;
    case 'second-li':
      previous = li1;
      next = li3;
      break;
      case 'third-li':
      next = li1;
      previous = li2;
      break;
  }

  if(variavel.className != 'tech') {

    variavel.className = 'tech';
    next.className = '';
    previous.className = '';

  } else if (variavel.className == 'tech') {

    variavel.className = '';
    next.className = '';
    previous.className = '';

  }

}

li1.addEventListener('click', clicadoTech);
li2.addEventListener('click', clicadoTech);
li3.addEventListener('click', clicadoTech);


//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

let digita = document.getElementById('input');
digita.addEventListener('change', alteraTech);

function alteraTech () {

  let box = document.getElementsByClassName('tech');
  box[0].innerText = digita.value;

  digita.value = '';
}


// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

let h1 = document.getElementsByTagName('h1')[0];
h1.addEventListener('dblclick', redireciona);

function redireciona() {
  window.location.replace('https://guilhermearaujoo.github.io/');
}

//  - Que tal redirecionar para seu portfólio?

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

let h3 = document.getElementById('my-spotrybefy');
h3.addEventListener('mouseover', function() {
  h3.style.color = 'green';
})

h3.addEventListener('mouseout', function() {
  h3.style.color = 'white';
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.