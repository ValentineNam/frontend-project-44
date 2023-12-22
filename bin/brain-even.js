#!/usr/bin/env node

import getUserInput from '../src/cli.js';
import generateRandomInt from '../src/math-funcs.js';
import gameLoop from '../src/index.js';

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

const game = (inputedName) => {
  const name = inputedName;
  let res = true;
  const num = generateRandomInt();
  console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${num}`);
  const answer = getUserInput('Your answer: ');
  if (checkAnswer(checkIsEven(num), answer)) {
    console.log('Correct!');
  } else {
    const correct = checkIsEven(num) ? 'yes' : 'no';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}`);
    res = false;
  }
  return res;
};

gameLoop(game);
