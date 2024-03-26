import getUserInput from './cli.js';

export const welcome = () => {
  let name = '';
  console.log('Welcome to the Brain Games!');
  name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const checkAnswer = (correct, answer) => {
return correct === answer;
};

export const questions = (opt, arg) => {
  console.log(`${opt}${arg}`);
  return getUserInput('Your answer: ');
};