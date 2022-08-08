import {
  askQuestion, getRandomNumber, isCorrectAnswer, playGame,
} from '../src/index.js';

const GAME_DESC = 'What is the result of the expression?';
const OPERATIONS = ['*', '+', '-'];

const getResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      return num1 + num2;
  }
};

const getRandomOperation = () => OPERATIONS[getRandomNumber(3)];

const askUser = () => {
  const operation = getRandomOperation();
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const userAnswer = askQuestion(`${firstNumber} ${operation} ${secondNumber}`);
  const expectedAnswer = getResult(firstNumber, secondNumber, operation);
  return isCorrectAnswer(userAnswer, expectedAnswer);
};

export default () => {
  playGame(GAME_DESC, askUser);
};
