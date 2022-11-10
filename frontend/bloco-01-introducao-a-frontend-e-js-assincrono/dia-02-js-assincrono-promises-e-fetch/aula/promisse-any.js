// função que gera número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// cria uma promise que será sempre resolvida
const generateResolvedPromise = (timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      console.log(`Promise resolvida em ${timer / 1000} segundo(s)`);
      resolve(
        `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
      );
    }, timer);
  });

// cria uma promise que será sempre rejeitada
const generateRejectedPromise = (timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      console.log(`Promise rejeitada em ${timer / 1000} segundo(s)`);
      reject(
        new Error(
          `O número ${randomNumber} é inválido. Promise rejeitada em ${
            timer / 1000
          } segundo(s)`
        )
      );
    }, timer);
  });

  //retorna o valor da primeira promise resolvida
// Promise.any([
//   generateResolvedPromise(4000),
//   generateResolvedPromise(3000),
//   generateResolvedPromise(2000),
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error.message));



// //retorna um objeto de erros qnd todas as promises são rejeitadas
Promise.any([
  generateRejectedPromise(1000),
  generateRejectedPromise(3000),
  generateRejectedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));

