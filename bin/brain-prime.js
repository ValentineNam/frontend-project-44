#!/usr/bin/env node

import generateRandomInt from '../src/math-funcs.js';
import gameLoop, { checkAnswer, questions } from '../src/index.js';

const checkIsPrime = (num) => {
  let res = true;
  const max = Math.round(Math.sqrt(num));
  for (let i = 2; i <= max; i += 1) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }
  return res;
};

const game = (inputedName) => {
  const name = inputedName;
  let res = true;
  const num = generateRandomInt(1, 33);
  const quest = 'Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ';
  const answer = questions(quest, num);
  if (checkAnswer(checkIsPrime(num), answer)) {
    console.log('Correct!');
  } else {
    const correct = checkIsPrime(num) ? 'yes' : 'no';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
    res = false;
  }
  return res;
};

gameLoop(game);
