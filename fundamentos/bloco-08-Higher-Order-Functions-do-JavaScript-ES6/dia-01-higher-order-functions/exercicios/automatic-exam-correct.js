// Crie uma HOF que receberá três parâmetro

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (correct, given) => {
  let result = 0;
  for(let index = 0; index < correct.length; index += 1) {
    if(given[index] !== 'N.A') 
      (correct[index] === given[index]) ? result += 1 : result -= 0.5
  }

  (result >= 0) ? result = result : result = result*(-1)  

  return result
 }

 const test = (correctAnswers, givenAnswers, func) => func(correctAnswers, givenAnswers);

 console.log(`TEST RESULT: ${test(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer)}`);