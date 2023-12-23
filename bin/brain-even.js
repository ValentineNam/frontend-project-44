#!/usr/bin/env node

import generateRandomInt from '../src/math-funcs.js';
import gameLoop, { checkAnswer } from '../src/index.js';
import { questions } from '../src/index.js';

const checkIsEven = (num) => (num % 2 === 0);

const game = (inputedName) => {
  const name = inputedName;
  let res = true;
  const num = generateRandomInt();
  const answer = questions('even', num);
  if (checkAnswer(checkIsEven(num), answer)) {
    console.log('Correct!');
  } else {
    const correct = checkIsEven(num) ? 'yes' : 'no';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
    res = false;
  }
  return res;
};

gameLoop(game);
