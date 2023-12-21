import welcome from "../bin/brain-games";

const gameLoop = (fn) => {
    let isWin = true;
    let name = '';
  
    welcome();

    for (let quest = 3; quest > 0 && isWin; quest -= 1) {
        fn();
    }

    if (isWin) {
      console.log(`Congratulations, ${name}`);
    }
  };

  export { gameLoop };