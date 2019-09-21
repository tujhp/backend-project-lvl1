import readlineSync from 'readline-sync';
import gameLoop from '..';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const rule = 'What is the result of the expression?';

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
  // console.log('Welcome to the Brain Games!');
  // console.log('What is the result of the expression?\n');
  //
  // const name = askName();
  // const count = 3;
  // for (let i = 0; i < count; i++) {
  //   const sign = signs[getRandomInt(3)];
  //   const a = getRandomInt(101);
  //   const b = getRandomInt(101);
  //   const correctAnswer = chooseSigns(sign)(a, b);
  //   console.log(`Question: ${a} ${sign} ${b}`);
  //   const answ = readlineSync.question('Your answer: ');
  //   if (correctAnswer === Number(answ)) {
  //     console.log('Correct');
  //   } else {
  //     console.log(`'${answ}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  //     return;
  //   }
  // }
  //
  // console.log(`Congratulations, ${name}!`);
  // eslint-disable-next-line consistent-return

  const sign = signs[getRandomInt(3)];
  const a = getRandomInt(101);
  const b = getRandomInt(101);
  const correctAnswer = chooseSigns(sign)(a, b);
  const question = `Question: ${a} ${sign} ${b}`;
  return { question, correctAnswer };
};


export default () => gameLoop(rule, generateQuestion);
