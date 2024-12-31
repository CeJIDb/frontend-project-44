import { getRandomInt, isEven } from '../utils.js';

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumber = 100;

const generateRound = () => {
  const question = getRandomInt(1, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export { description, generateRound };
