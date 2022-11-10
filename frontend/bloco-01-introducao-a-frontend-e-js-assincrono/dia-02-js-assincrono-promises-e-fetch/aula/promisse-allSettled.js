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


//rertorna uma rray de objetos ocm o valor de todas as promisse  
Promise.allSettled([
  generateResolvedPromise(1000),
  generateResolvedPromise(3000),
  generateRejectedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));