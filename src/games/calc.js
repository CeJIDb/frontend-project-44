import getRandomInt from '../utils.js';

const getRandomOperation = (operations) =>
  operations[Math.floor(Math.random() * operations.length)];

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operation = getRandomOperation(operations);
  const question = `${num1} ${operation} ${num2}`;

  const operationsMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  const correctAnswer = operationsMap[operation](num1, num2).toString();

  return { question, correctAnswer };
};

export { description, generateRound };
