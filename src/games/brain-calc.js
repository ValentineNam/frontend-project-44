import gameLoop from '../index.js';
import { calculate, generateCalcParams } from '../math-funcs.js';
import { checkAnswer, questions } from '../utils.js';

const calcGame = () => {
  const obj = generateCalcParams();
  const expression = `${obj.firstNumber} ${obj.option} ${obj.secondNumber}`;
  const quest = 'What is the result of the expression?.\nQuestion: ';
  const correct = calculate(obj.firstNumber, obj.option, obj.secondNumber);
  const answer = questions(quest, expression);
  const result = checkAnswer(correct, answer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  }
  return result;
};

const game = () => { gameLoop(calcGame); };

export default game;
