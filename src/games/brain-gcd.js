import gameLoop from '..';
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const rule = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  let first = a;
  let second = b;
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }

  return first + second;
};
const generateQuestion = () => {
    const a = getRandomInt(101);
    const b = getRandomInt(101);
    const correctAnswer = gcd(a, b);
    const question = `Question: ${a} ${b}`;
    return {question, correctAnswer};
};

export default () => gameLoop(rule, generateQuestion);
