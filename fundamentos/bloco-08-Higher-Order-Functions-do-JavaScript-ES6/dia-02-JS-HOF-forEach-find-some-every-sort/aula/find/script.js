const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// returns the first element that is divisible by five
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50

