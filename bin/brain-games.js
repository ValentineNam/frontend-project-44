#!/usr/bin/env node

import getUserInput from '../src/cli.js';

let name = '';

console.log('Welcome to the Brain Games!');
name = getUserInput('May I have your name? ');
console.log(`Hello, ${name}`);
