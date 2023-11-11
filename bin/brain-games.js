#!/usr/bin/env node

import { getName } from '../src/cli.js';

let name = '';

console.log('Welcome to the Brain Games!');
name = getName();
console.log(`Hello, ${name}`);
