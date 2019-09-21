import gameLoop from '..';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const createProgression = () => {
  const progression = [0];
  const step = getRandomInt(10);
  for (let i = 0; i < 10; i++) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const rule = 'What number is missing in the progression?';

const generateQuestion = () => {
  const progr = createProgression(getRandomInt(10));
  const ind = getRandomInt(10);
  const correctAnswer = progr[ind];
  progr[ind] = '..';
  let strProgr = '';
  for (let i = 0; i < progr.length; i++) {
    strProgr += `${progr[i]} `;
  }
  const question = `Question: ${strProgr}`;
  return { question, correctAnswer };
};


export default () => gameLoop(rule, generateQuestion);
