#!/usr/bin/env node

import generateRandomInt from '../src/math-funcs.js';
import gameLoop, { checkAnswer, questions } from '../src/index.js';

const checkIsEven = (num) => (num % 2 === 0);

const game = (inputedName) => {
  const name = inputedName;
  let res = true;
  const num = generateRandomInt();
  const quest = 'Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ';
  const answer = questions(quest, num);
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
