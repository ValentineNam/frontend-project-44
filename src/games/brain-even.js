import gameLoop from '../index.js';
import generateRandomInt, { checkIsEven } from '../math-funcs.js';
import { checkAnswer, questions } from '../utils.js';

const evenGame = () => {
  const quest = 'Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ';
  const num = generateRandomInt();
  const answer = questions(quest, num);
  const correct = checkIsEven(num) ? 'yes' : 'no';
  const result = checkAnswer(correct, answer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  }
  return result;
};

const game = () => { gameLoop(evenGame); };

export default game;
