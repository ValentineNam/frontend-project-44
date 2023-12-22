#!/usr/bin/env node

import getUserInput from '../src/cli.js';
import generateRandomInt from '../src/math-funcs.js';
import gameLoop from '../src/index.js';

const generateRandomOp = () => {
    const ops = ['+', '-', '*'];
    return ops[generateRandomInt(0, ops.length - 1)];
}

const generateQuestParams = () => {
    let res = {};
    res.firstNumber = generateRandomInt(0, 100);
    res.predicate = generateRandomOp();
    res.secondNumber = generateRandomInt(0, 100);
    return res;
}

let out = generateQuestParams();

console.log(`${out.firstNumber} ${out.predicate} ${out.secondNumber}`);
