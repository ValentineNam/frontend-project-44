#!/usr/bin/env node

import getUserInput from '../src/cli.js';
import generateRandomInt from '../src/math-funcs.js';
import { gameLoop } from '../src/index.js';

const checkIsEven = (num) => (num % 2 === 0);

const checkAnswer = (isEven, answer) => {
  let res = false;

  if (isEven) {
    res = answer === 'yes';
  } else {
    res = answer === 'no';
  }

  return res;
};

const game = (name) => {
    const num = generateRandomInt();
    console.log(`Question: ${num}`);
    const answer = getUserInput('Your answer: ');
    if (checkAnswer(checkIsEven(num), answer)) {
      console.log('Correct!');
    } else {
      const correct = checkIsEven(num) ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}`);
      isWin = false;
    }
}

gameLoop(game);
