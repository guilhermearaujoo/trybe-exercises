const myRemove = require('./myRemove');

describe('Function my remove', () => {
  it('When called myRemove([1, 2, 3, 4], 3) must return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  it('When called myRemove([1, 2, 3, 4], 3) must not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  it('When called myRemove([1, 2, 3, 4], 5) must return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado