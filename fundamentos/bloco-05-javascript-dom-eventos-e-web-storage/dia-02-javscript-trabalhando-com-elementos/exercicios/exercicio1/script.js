// O objetivo desses exercícios é colocar em prática o seu conhecimento sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

// Comece criando algumas coisas:

// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;

let title = document.createElement('h1');

title.innerHTML = 'Exercício - JavaScript DOM como filho da tag body';

document.body.appendChild(title);

// Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement('main');

main.className = 'main-content';
document.body.append(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let section = document.createElement('section');

section.className = 'center-content';

main.appendChild(section);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragraph = document.createElement('p');
paragraph.innerText = 'Olá eu sou um paragráfo criado por meio de um script em JavaScript';
section.appendChild(paragraph);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';

main.appendChild(sectionLeft);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionRigth = document.createElement('section');
sectionRigth.className = 'right-content';

main.appendChild(sectionRigth); 

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;



let imagem = document.createElement('img')
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';

sectionLeft.appendChild(imagem);


// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listUnorder = document.createElement('ul');

let object = {
  'um': 1,
  'dois': 2,
  'três': 3,
  'quatro': 4,
  'cinco': 5,
  'seis': 6,
  'sete': 7,
  'oito': 8,
  'nove': 9,
  'dez': 10,
};

for (let index in object) {
  let item = document.createElement('li');
  item.innerText = index;

  listUnorder.appendChild(item);
}

sectionRigth.appendChild(listUnorder);

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for(let index=0; index < 3; index += 1) {
  let h3 = document.createElement('h3');
  main.appendChild(h3);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// Adicione a classe title na tag h1 criada;

title.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;

let allH3 = document.getElementsByTagName('h3');

for (let index = 0; index < allH3.length; index += 1) {
  allH3[index].className = 'description';
}
// Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

sectionLeft.remove();

// Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

sectionRigth.style.marginRight = 'auto';


// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

section.style.backgroundColor = 'green';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

list = listUnorder.childNodes;
list[list.length-1].remove();
list[list.length-1].remove();
