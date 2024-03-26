import getUserInput from './cli.js';

export const welcome = () => {
  let name = '';
  console.log('Welcome to the Brain Games!');
  name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const checkAnswer = (fn, answer) => {
  let res = false;

  if (fn) {
    res = answer === 'yes';
  } else {
    res = answer === 'no';
  }

  return res;
};

export const questions = (opt, arg) => {
  console.log(`${opt}${arg}`);
  return getUserInput('Your answer: ');
};