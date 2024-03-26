import gameLoop from "../index.js";
import generateRandomInt, { gcdSearch } from "../math-funcs.js";
import { checkAnswer, questions } from "../utils.js";

const calcGame = () => {
  const a = generateRandomInt(1, 150);
  const b = generateRandomInt(1, 150);
  const expression = `${a} ${b}`;
  const quest = `Find the greatest common divisor of given numbers.\nQuestion: `;
  const correct = gcdSearch(a, b);
  const answer = questions(quest, expression);
  const result = checkAnswer(correct, answer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  }
  return result;
}

const game = () => { gameLoop(calcGame) };

export default game;