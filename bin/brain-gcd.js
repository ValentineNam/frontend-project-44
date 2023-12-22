#!/usr/bin/env node

import getUserInput from '../src/cli.js';
import generateRandomInt from '../src/math-funcs.js';
import gameLoop from '../src/index.js';

const cgdSearch = (a, b) => {
    let temp;
    let tempA = a;
    let tempB = b;
    while (tempB) {
        temp = tempB;
        tempB = tempA % tempB;
        tempA = temp;
    }
    return tempA;
}

console.log(cgdSearch(60, 40));
