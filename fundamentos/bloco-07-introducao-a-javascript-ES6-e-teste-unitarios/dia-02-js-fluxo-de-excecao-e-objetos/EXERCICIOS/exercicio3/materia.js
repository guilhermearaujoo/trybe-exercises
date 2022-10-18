const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addEntry = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

addEntry(lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const showKeys = objeto => console.log(Object.keys(objeto));

// Crie uma função para mostrar o tamanho de um objeto.

const objectSize = objeto => console.log(Object.keys(objeto).length);


// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const showValues = objeto => console.log(Object.values(objeto));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = {};
allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);
// Copiar
// console.log(allLessons);
// /*
// {
//   lesson1:
//    { materia: 'Matemática',
//      numeroEstudantes: 20,
//      professor: 'Maria Clara',
//      turno: 'manhã' },
//   lesson2:
//    { materia: 'História',
//      numeroEstudantes: 20,
//      professor: 'Carlos',
//      turno: 'noite' },
//   lesson3:
//    { materia: 'Matemática',
//      numeroEstudantes: 10,
//      professor: 'Maria Clara',
//      turno: 'noite' }
// };
// */
// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const studentNumber = () => {
  const aulas = Object.values(allLessons);
  let alunos = 0;

  for (let index of aulas) {
    alunos += index.numeroEstudantes;
  }

  console.log(`Numero de estudantes em todas as áreas ${alunos}`);
}

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (objeto, position) => {
  if (position >= 0 && position < Object.keys(objeto).length) {
    return Object.values(objeto)[position];
  } 
  return 'Tamanho inválido';
}

// Copiar
// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matemática'

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// Copiar
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false

const verifyPair = (objeto, chave, valor) => (Object.keys(objeto).includes(chave)) && (objeto[chave] === valor) ? true : false;

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));


// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.

const estudantesPorAula = (aula) => {
  const aulas = Object.values(allLessons);
  let alunos = 0;

  for (let index of aulas) {
    if (index.materia === aula) {
      alunos += index.numeroEstudantes;
    }
  }

  console.log(`Teve ${alunos} alunos na aula de ${aula}`);
}

estudantesPorAula('Matemática');

// Utilizando o objeto (allLesson), crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

// console.log(createReport(allLessons, 'Maria Clara'));
// /* {
//   professor: 'Maria Clara',
//   aulas: [ 'Matemática', 'Matemática' ],
//   estudantes: 30
// } */

const createReport = (objeto, nomeProfessor) => {
  const aulas = Object.values(objeto); 
  const objetos = [];

  for (let index of aulas) {
    if (index.professor === nomeProfessor) {
      objetos.push(Object.assign({}, index));
    }
  }

  const relatorio = {'professor': nomeProfessor, 'aulas': [], 'estudantes': 0}
  for (let index of objetos) {
    relatorio.aulas.push(index.materia);
    relatorio.estudantes += index.numeroEstudantes;
  }
  return relatorio;
}

console.log(createReport(allLessons, 'Maria Clara'));