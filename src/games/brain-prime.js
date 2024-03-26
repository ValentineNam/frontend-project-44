import gameLoop from "../index.js";
import generateRandomInt, { checkIsPrime } from "../math-funcs.js";
import { checkAnswer, questions } from "../utils.js";

const primeGame = () => {
  const num = generateRandomInt(1, 33);
  const quest = 'Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ';
  const correct = checkIsPrime(num)? 'yes' : 'no';
  const answer = questions(quest, num);
  const result = checkAnswer(correct, answer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  }
  return result;
}

const game = () => { gameLoop(primeGame) };

export default game;