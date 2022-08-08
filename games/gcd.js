import {
  askQuestion, getRandomNumber, isCorrectAnswer, playGame,
} from '../src/index.js';

const GAME_DESC = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  let num1 = firstNumber;
  let num2 = secondNumber;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 || num2;
};

const askUser = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const expectedAnswer = findGcd(firstNum, secondNum);
  const userAnswer = askQuestion(`${firstNum} ${secondNum}`);
  return isCorrectAnswer(userAnswer, expectedAnswer);
};

export default () => {
  playGame(GAME_DESC, askUser);
};
