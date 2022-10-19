// Crie uma função que retorne um array em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.



const sortOddsAndEvens = (oddsAndEvens) => console.log(`Os números ${oddsAndEvens.sort((a, b) => a-b)} se encontram ordenados de forma crescente!`);
  // let x;
  //bubble-sort
  // for (let index = 0; index < oddsAndEvens.length; index += 1) {
  //   for(let i = index; i < oddsAndEvens.length; i += 1) {
  //     if(oddsAndEvens[index] > oddsAndEvens[i]) {
  //       x = oddsAndEvens[i];
  //       oddsAndEvens[i] = oddsAndEvens[index];
  //       oddsAndEvens[index] = x;
  //     }
  //   }
  // }
  

// Seu código aqui.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
sortOddsAndEvens(oddsAndEvens);

