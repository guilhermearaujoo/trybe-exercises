// Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele (firstName, lastName, specialities). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada". Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível".
const searchEmployee = require("./searchEmployee");

describe("Verify searchEmployee function", () => {
  it("Verify if searchEmployee is defined", () => {
    expect(searchEmployee).toBeDefined();
  });

  it("Verify if searchEmployee is a function", () => {
    expect(typeof searchEmployee).toBe("function");
  });

  it('When called searchEmployee("5569-4", "firstName") must return "George"', () => {
    expect(searchEmployee("5569-4", "firstName")).toBe("George");
  });

  it('When called searchEmployee("9852-2-2", "lastName") must return "Cook"', () => {
    expect(searchEmployee("9852-2-2", "lastName")).toBe("Cook");
  });

  it('When called searchEmployee("1256-4", "specialities") must return ["Hooks", "Context API", "Tailwind CSS"]', () => {
    expect(searchEmployee("1256-4", "specialities")).toEqual([
      "Hooks",
      "Context API",
      "Tailwind CSS",
    ]);
  });

  it('When called searchEmployee("00152", "lastName") must return Error(ID não identificada)', () => {
    expect(() => searchEmployee("00152", "lastName")).toThrow(new Error('ID não identificada'));
  });

  it('When called searchEmployee("8579-6", "conjuge") must return Error(Informação indisponível)', () => {
    expect(() => searchEmployee("8579-6", "conjuge")).toThrow(new Error('Informação indisponível'));
  });
});
