function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Crie um calendário dinamicamente.

// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days'
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDecemberDays () {

  let diaLista = document.getElementById('days');


  for (let index of decemberDaysList) {
    let dia = document.createElement('li');
    diaLista.appendChild(dia);
    dia.className = 'day';
    dia.innerHTML = index;

    if (index === 24 || index === 31) {
      dia.className = 'day holiday';
    }

    if (index === 4 || index === 11 || index === 18) {
      dia.className = 'day friday';
    }

    if (index === 25) {
      dia.className = 'day friday holiday';
    }
  }
}

createDecemberDays();

// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function criaFeriados (string) {

  let feriados = document.createElement('button');
  feriados.innerHTML = string;
  feriados.id = "btn-holiday";


  let buttonsContainer = document.getElementsByClassName("buttons-container")[0];
  buttonsContainer.appendChild(feriados);
}

criaFeriados('Feriados');

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

function changeColor () {
  
  let holiday = document.getElementsByClassName('holiday');

  for (let index of holiday) {
    if (index.style.backgroundColor === 'white') {
      index.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      index.style.backgroundColor = 'white';
    }
  }
}

let button = document.getElementById("btn-holiday");
button.addEventListener('click',  changeColor);

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function createFriday (string) {
  let friday = document.createElement('button');
  friday.innerHTML = string;
  friday.id = "btn-friday";


  let buttonsContainer = document.getElementsByClassName("buttons-container")[0];
  buttonsContainer.appendChild(friday);
}

createFriday('Sexta-feira');

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
let friday = document.getElementsByClassName('friday');
let fridayRecover = [];

for (let i of friday) {
  fridayRecover.push(i.innerHTML);
}




function changeFriday () {

  let friday = document.getElementsByClassName('friday');
  
  for (let index = 0; index < friday.length; index += 1) {
    if(friday[index].innerHTML === 'SEXTOU!') {
      friday[index].innerHTML = fridayRecover[index];
    } else {
      friday[index].innerHTML = 'SEXTOU!';
    }
  }
}

let buttonFriday = document.getElementById("btn-friday");
buttonFriday.addEventListener('click', changeFriday); 

// Implemente duas funções que criem um efeito de “zoom”.
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// Dica - Propriedade: event.target.

function zoomIn () {
    event.target.style.fontSize = '30px';
}

function zoomOut () {
  event.target.style.fontSize = '20px';
}

  
let days = document.getElementsByClassName('day');

for (let index of days) {
    index.addEventListener('mouseover', zoomIn);
    index.addEventListener('mouseout', zoomOut);
}

// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".


let myTasks = document.getElementsByClassName('my-tasks')[0];

function createTask (string) {

  let task = document.createElement('span');
  task.innerHTML = string;
  myTasks.appendChild(task);
}

createTask('Cozinhar:');

// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"

function createColor (color) {

  let div = document.createElement('div');
  div.className = 'task';

  div.style.backgroundColor = color;
  myTasks.appendChild(div);
}

createColor('green');


// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function taskSelected () {

  if ( event.target.className === 'task selected') {
    event.target.className = 'task';
  } else {
    event.target.className = 'task selected'
  }
}

let tasks = document.getElementsByClassName('task');
for (let index of tasks) {
  index.addEventListener('click', taskSelected);
}

// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

function addColor () {
  let color = document.getElementsByClassName('task selected')[0]; 

  if (event.target.style.color === color.style.backgroundColor) {
    event.target.style.color = '#666';
  } else {
    event.target.style.color = color.style.backgroundColor;
  }
}

for (let index of days) {
  index.addEventListener('click', addColor);
}

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”.
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”.
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// Dica - Propriedade: key.


function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();
