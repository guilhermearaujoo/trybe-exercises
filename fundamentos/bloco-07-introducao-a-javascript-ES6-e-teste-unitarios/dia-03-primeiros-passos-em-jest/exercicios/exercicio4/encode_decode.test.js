const {encode, decode} = require('./encode_decode');

// Para as funções encode e decode, crie os seguintes testes em Jest:
// Teste se encode e decode são funções;
// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

describe('Encode', () => {
  it('"encode()" must be a function', () => {
    expect(typeof encode).toBe('function');
  })

  it('When called "aeiou" must return "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  })

  it('When called "dckxy" must return "dckxy"', () => {
    expect(encode('dckxy')).toBe('dckxy');
  })

  it('When called "ab784e" must return "1b7842"', () => {
    expect(encode('ab784e')).toBe('1b7842');
  })

  it('When called "aeiou" must return a string with size 5', () => {
    expect(encode('aeiou').length).toBe(5);
  })
})

describe('Decode', () => {
  it('"decode()" must be a function', () => {
    expect(typeof decode).toBe('function');
  })

  it('When called "12345" must return "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  })

  it('When called "6789" must return "6789"', () => {
    expect(decode('6789')).toBe('6789');
  })

  it('When called "1b78o2" must return "ab78oe"', () => {
    expect(decode('1b78o2')).toBe('ab78oe');
  })

  it('When called "aeiou" must return a string with size 5', () => {
    expect(decode('aeiou').length).toBe(5);
  })
})