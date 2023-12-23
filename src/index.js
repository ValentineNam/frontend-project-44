import welcome from '../bin/brain-games.js';

const gameLoop = (fn) => {
  let isWin = true;
  const name = welcome();

  for (let quest = 3; quest > 0 && isWin; quest -= 1) {
    isWin = fn? fn(name) : false;
  }

  if (isWin) {
    console.log(`Congratulations, ${name}`);
  }
};

export default gameLoop;
