import { welcome } from './utils.js';

const gameLoop = (fn) => {
  let isWin = true;
  const name = welcome();
  for (let round = 3; round > 0 && isWin; round -= 1) {
    isWin = fn();
    if (isWin) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  }
};

// gameLoop(evenGame);

export default gameLoop;
