const sum = require("./sum");

// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9

// Teste se o retorno de sum(0, 0) é 0

// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)

// Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")

describe("Function Sum", () => {
  it("When called sum(4, 5) must return 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("When called sum(0, 0) must return 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("When called sum(4, '5') must return an Error", () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  it("When called sum(4, '5') must return an Error message 'parameters must be numbers'", () => {
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
  });
});
