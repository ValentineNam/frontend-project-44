import gameLoop from "../index.js";
import generateRandomInt from "../math-funcs.js";
import { checkAnswer, questions, generateProgressionArray, arrayToFormatedString } from "../utils.js";

const progressionGame = () => {
  const arr = generateProgressionArray();
  const missedIndex = generateRandomInt(0, arr.length - 1);
  const correct = arr[missedIndex];
  arr[missedIndex] = '..';
  const formatedStr = arrayToFormatedString(arr);
  const quest = `What number is missing in the progression?\nQuestion: `;
  const answer = questions(quest, formatedStr);
  const result = checkAnswer(correct, answer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  }
  return result;
}

const game = () => { gameLoop(progressionGame) };

export default game;
