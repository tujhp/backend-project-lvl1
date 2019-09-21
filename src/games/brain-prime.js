import gameLoop from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isPrime = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count += 1;
    }
  }

  if (count === 2) {
    return 'yes';
  }
  return 'no';
};


const generateQuestion = () => {
  const num = getRandomInt(1001);
  const correctAnswer = isPrime(num);
  const question = `Question: ${num}`;
  return { question, correctAnswer };
};

export default () => gameLoop(rule, generateQuestion);
