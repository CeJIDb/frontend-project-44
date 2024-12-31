import { getRandomInt } from '../utils.js';

const getRandomOperation = (operations) =>
  operations[Math.floor(Math.random() * operations.length)];

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operation = getRandomOperation(operations);
  const question = `${num1} ${operation} ${num2}`;

  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = num1 + num2;
      break;
  }

  correctAnswer = String(correctAnswer);

  return { question, correctAnswer };
};

export { description, generateRound };
