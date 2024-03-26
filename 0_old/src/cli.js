import readlineSync from 'readline-sync';

const getUserInput = (question) => readlineSync.question(question);
export default getUserInput;
