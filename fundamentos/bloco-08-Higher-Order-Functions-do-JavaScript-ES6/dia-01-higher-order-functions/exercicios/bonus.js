const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.

// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
  let damage = Math.ceil(Math.random() * dragon["strength"]);
  damage < 15 ? (damage = 15) : (damage = damage);
  return damage;
};

// Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
  let damage = Math.ceil(
    Math.random() * (warrior["strength"] * warrior["weaponDmg"])
  );
  damage < warrior["strength"]
    ? (damage = warrior["strength"])
    : (damage = damage);
  return damage;
};

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”) e a mana gasta é 0.

const mageDamageAndMana = () => {
  let damage = Math.ceil(Math.random() * (mage["intelligence"] * 2));

  damage < mage["intelligence"]
    ? (damage = mage["intelligence"])
    : (damage = damage);

  let spendMana;
  if (mage["mana"] > 15) {
    spendMana = 15;
  } else {
    console.log("Não possui mana suficiente");
    spendMana = 0;
  }

  return { damage: damage, manaSpend: spendMana };
};

// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por definição uma HOF, pois, neste caso, são funções que recebem como parâmetro outra função.

const gameActions = {
  // Crie as HOFs neste objeto.

  // Crie a primeira HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.
  warriorHit: (func) => {
    warrior["damage"] = func();
    dragon["healthPoints"] -= warrior["damage"];
  },

  // Crie a segunda HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.
  mageHit: (func) => {
    const { damage, manaSpend } = func();

    if (manaSpend !== 0) {
      mage["mana"] -= manaSpend;
      mage["damage"] = damage;
    } else {
      mage["damage"] = 0;
    }

    dragon["healthPoints"] -= mage["damage"];
  },

  // Crie a terceira HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.
  dragonHit: (func) => {
    dragon['damage'] = func();
    warrior['healthPoints'] -= dragon['damage'];
    mage['healthPoints'] -= dragon['damage'];
  },

  play: () => battleMembers
};

gameActions.warriorHit(warriorDamage);
gameActions.mageHit(mageDamageAndMana);
gameActions.dragonHit(dragonDamage);

console.log(gameActions.play());

// Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
