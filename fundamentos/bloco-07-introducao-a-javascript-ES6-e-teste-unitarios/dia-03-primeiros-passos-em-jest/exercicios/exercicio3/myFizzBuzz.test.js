const myFizzBuzz = require("./myFizzBuzz");

describe("Function MyFizzBuzz", () => {
  it('When called myFizBuzz(15) must return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });

  it('When called myFizBuzz(6) must return "fizz"', () => {
    expect(myFizzBuzz(6)).toBe("fizz");
  });

  it('When called myFizBuzz(10) must return "buzz"', () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });

  it('When called myFizBuzz(2) must return 2', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('When called myFizBuzz("number") must return false', () => {
    expect(myFizzBuzz('number')).toBeFalsy();
  });
});

// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
