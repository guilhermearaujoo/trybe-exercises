// // função que gera um número aleatório
// const generateRandomNumber = () => Math.round(Math.random() * 10);

// // promise resolvida retornando o número aleatório
// const resolvedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       resolve(randomNumber);
//     }, 1000);
//   });


// // promise rejeitada retornando um objeto de erro
// const rejectedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       reject(new Error(`O número ${randomNumber} é inválido.`));
//     }, 1000);
//   });

// rejectedPromise();

// EXEMPLO DE PROMISSE

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

const randomPromisse = () => 
  new Promise((resolve, reject) => 
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0 ) resolve (randomNumber);
      else (reject(new Error(`Number ${randomNumber} is not valid because is odd. Please try  again`)));
    }, 1000)
   );

randomPromisse()
  .then((response) => console.log(`ResolvedPromise: number ${response} is valid.`))
  .catch((error) => console.log(`RejectPromisse: ${error.message}`))
  .finally(() => console.log('Fim da promise'))


// código que não é assíncrono.
// Será executado antes do retorno da resolvedPromise
// mesmo estando após ela no código
console.log(
  `Esse número não foi gerado por um código assíncrono: ${generateRandomNumber()}`
);