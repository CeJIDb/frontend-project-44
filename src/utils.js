export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomOperation = (operations) =>
  operations[Math.floor(Math.random() * operations.length)];

export const isEven = (number) => number % 2 === 0;

export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
