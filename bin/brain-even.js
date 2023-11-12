#!/usr/bin/env node

import getUserInput from '../src/cli.js';
import generateRandomInt from "../src/math-funcs.js";

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

const gameLoop = () => {
  let isWin = true;
  let name = '';
  console.log('Welcome to the Brain Games!');
  name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let quest = 3; quest > 0; quest -= 1) {
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
      break;
    }
  }
  if (isWin) {
    console.log(`Congratulations, ${name}`);
  }
};

gameLoop();
