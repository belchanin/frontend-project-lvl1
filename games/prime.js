import {
  askQuestion, getRandomNumber, isCorrectAnswer, playGame,
} from '../src/index.js';

const GAME_DESC = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let isPrimeNum = true;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      isPrimeNum = false;
      break;
    }
  }
  return isPrimeNum ? 'yes' : 'no';
};

const askUser = () => {
  const randomNum = getRandomNumber();
  const expectedAnswer = isPrime(randomNum);
  const userAnswer = askQuestion(randomNum);
  return isCorrectAnswer(userAnswer, expectedAnswer);
};

export default () => {
  playGame(GAME_DESC, askUser);
};
