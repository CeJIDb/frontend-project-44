import { getRandomInt, gcd } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  let num1 = getRandomInt(1, 100);
  let num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return { question, correctAnswer };
};

export { description, generateRound };
