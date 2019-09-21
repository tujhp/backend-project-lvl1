import readlineSync from 'readline-sync';
import gameLoop from '..';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const rule = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const generateQuestion = () => {
  const num = getRandomInt(101);
  const correctAnswer = checkEven(num);
  const question = `Questioin: ${num}`;
  return { question, correctAnswer };
};

export default () => gameLoop(rule, generateQuestion);
