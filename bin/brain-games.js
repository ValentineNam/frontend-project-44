#!/usr/bin/env node

import getUserInput from '../src/cli.js';

const welcome = () => {
  let name = '';
  console.log('Welcome to the Brain Games!');
  name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default welcome;

welcome();
