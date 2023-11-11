#!/usr/bin/env node
'use strict'

import { getName } from '../src/cli.js';

let name = '';

console.log('Welcome to the Brain Games!');
name = getName();
console.log(`Hello, ${name}`);

