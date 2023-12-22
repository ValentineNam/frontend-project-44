#!/usr/bin/env node

import getUserInput from '../src/cli.js';
import generateRandomInt from '../src/math-funcs.js';
import gameLoop from '../src/index.js';

const generateRandomOp = () => {
  const ops = ['+', '-', '*'];
  return ops[generateRandomInt(0, ops.length - 1)];
};

const generateQuestParams = () => {
  const res = {};
  res.firstNumber = generateRandomInt(0, 30);
  res.option = generateRandomOp();
  res.secondNumber = generateRandomInt(0, 30);
  return res;
};

const calculate = (a, op, b) => {
  let res = 0;
  switch (op) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    default:
      break;
  }
  return res;
};

const checkAnswer = (calculated, answer) => (parseInt(calculated, 10) === parseInt(answer, 10));

const game = (inputedName) => {
  const name = inputedName;
  let res = true;
  let calculated = 0;
  const obj = generateQuestParams();
  calculated = calculate(obj.firstNumber, obj.option, obj.secondNumber);
  console.log(`What is the result of the expression?.\nQuestion: ${obj.firstNumber} ${obj.option} ${obj.secondNumber}`);
  const answer = getUserInput('Your answer: ');
  if (checkAnswer(calculated, answer)) {
    console.log('Correct!');
  } else {
    const correct = calculate(obj.firstNumber, obj.option, obj.secondNumber);
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}`);
    res = false;
  }
  return res;
};

gameLoop(game);
