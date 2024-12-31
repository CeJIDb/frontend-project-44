export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomOperation = (operations) =>
  operations[Math.floor(Math.random() * operations.length)];

export const isEven = (number) => number % 2 === 0;
