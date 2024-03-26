#!/usr/bin/env node

import getUserInput from '../src/cli.js';
import generateRandomInt from '../src/math-funcs.js';
import gameLoop from '../src/index.js';

const generateProgressionArray = () => {
  const res = [];
  const len = generateRandomInt(5, 10);
  const start = generateRandomInt(0, 20);
  const step = generateRandomInt(1, 20);
  res.push(start);
  for (let i = 0; i < len - 1; i += 1) {
    res.push(res[i] + step);
  }
  return res;
};

const arrayToFormatedString = (arr) => {
  let str = '';
  arr.forEach((elem) => {
    str += `${elem} `;
  });

  return str.slice(0, -1);
};

const game = (inputedName) => {
  const name = inputedName;
  let res = true;
  const arr = generateProgressionArray();
  const missedIndex = generateRandomInt(0, arr.length - 1);
  const missedNumber = arr[missedIndex];
  arr[missedIndex] = '..';
  const formatedStr = arrayToFormatedString(arr);
  console.log(`What number is missing in the progression?\nQuestion: ${formatedStr}`);
  const answer = parseInt(getUserInput('Your answer: '), 10);
  if (answer === missedNumber) {
    console.log('Correct!');
  } else {
    const correct = missedNumber;
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
    res = false;
  }
  return res;
};

gameLoop(game);
