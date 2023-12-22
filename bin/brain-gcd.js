#!/usr/bin/env node

import getUserInput from '../src/cli.js';
import generateRandomInt from '../src/math-funcs.js';
import gameLoop from '../src/index.js';

const cgdSearch = (a, b) => {
    let temp;
    let tempA = a;
    let tempB = b;
    while (tempB) {
        temp = tempB;
        tempB = tempA % tempB;
        tempA = temp;
    }
    return tempA;
}

const checkAnswer = (calculated, answer) => (parseInt(calculated, 10) === parseInt(answer, 10));

const game = (inputedName) => {
  const name = inputedName;
  let res = true;
  let calculated = 0;
  let a = generateRandomInt(1, 150);
  let b = generateRandomInt(1, 150);
  calculated = cgdSearch(a, b);
  console.log(`Find the greatest common divisor of given numbers.\nQuestion: ${a} ${b}`);
  const answer = getUserInput('Your answer: ');
  if (checkAnswer(calculated, answer)) {
    console.log('Correct!');
  } else {
    const correct = cgdSearch(a, b);
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}`);
    res = false;
  }
  return res;
};

gameLoop(game);