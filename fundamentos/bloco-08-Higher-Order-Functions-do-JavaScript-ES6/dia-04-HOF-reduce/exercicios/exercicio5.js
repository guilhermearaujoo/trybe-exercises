// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

// const expectedResult = 20;

function containsA(names) {
  // escreva seu código aqui
  return names.reduce(
    (acc, cur) =>
      acc +
      cur
        .toLowerCase()
        .split("")
        .reduce((acc, cur) => (cur == "a" ? acc + 1 : acc), 0),
    0
  );
}

console.log(containsA(names));
