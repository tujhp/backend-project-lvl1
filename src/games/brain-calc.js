import gameLoop from '..';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const rule = 'What is the result of the expression?\n';

const signs = ['+', '-', '*'];
const chooseSigns = (sign) => {
  let fn;
  switch (sign) {
    case '+':
      fn = (a, b) => a + b;
      break;
    case '-':
      fn = (a, b) => a - b;
      break;
    case '*':
      fn = (a, b) => a * b;
      break;
  }
  return fn;
};

const generateQuestion = () => {
  const sign = signs[getRandomInt(3)];
  const a = getRandomInt(101);
  const b = getRandomInt(101);
  const correctAnswer = chooseSigns(sign)(a, b);
  const question = `Question: ${a} ${sign} ${b}`;
  return { question, correctAnswer };
};


export default () => gameLoop(rule, generateQuestion);
