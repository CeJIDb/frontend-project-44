import getRandomInt from '../utils.js';

const generateProgression = (start, step, length) => (
  Array.from({ length }, (_, i) => start + i * step)
);

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const start = getRandomInt(1, 100);
  const length = getRandomInt(5, 10);
  const step = getRandomInt(-15, 15);
  const progression = generateProgression(start, step, length);
  const missedNumIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[missedNumIndex]);

  progression[missedNumIndex] = '..';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

export { description, generateRound };
