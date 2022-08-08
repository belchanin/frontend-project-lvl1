import {
  askQuestion, getRandomNumber, isCorrectAnswer, playGame,
} from '../src/index.js';

const GAME_DESC = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const askUser = () => {
  const randomNumber = getRandomNumber();
  const userAnswer = askQuestion(randomNumber);
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return isCorrectAnswer(userAnswer, expectedAnswer);
};

export default () => {
  playGame(GAME_DESC, askUser);
};
