import getUserInput from './cli.js';
import generateRandomInt from './math-funcs.js';

export const welcome = () => {
  let name = '';
  console.log('Welcome to the Brain Games!');
  name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const checkAnswer = (correct, answer) => correct.toString() === answer.toString();

export const questions = (opt, arg) => {
  console.log(`${opt}${arg}`);
  return getUserInput('Your answer: ');
};

export const generateProgressionArray = () => {
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

export const arrayToFormatedString = (arr) => {
  let str = '';
  arr.forEach((elem) => {
    str += `${elem} `;
  });
  return str.slice(0, -1);
};
