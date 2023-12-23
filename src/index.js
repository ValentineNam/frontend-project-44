import getUserInput from './cli.js';

export const welcome = () => {
  let name = '';
  console.log('Welcome to the Brain Games!');
  name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const gameLoop = (fn) => {
  let isWin = true;
  const name = welcome();

  for (let quest = 3; quest > 0 && isWin; quest -= 1) {
    isWin = fn ? fn(name) : false;
  }

  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameLoop;
