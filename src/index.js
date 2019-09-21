// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';


export const askName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default(rule, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = askName();
  const count = 3;
  for (let i = 0; i < count; i++) {
    const { question, correctAnswer } = generateQuestion();
    console.log(question);
    const answ = readlineSync.question('Your answer: ');
    if (answ == correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
