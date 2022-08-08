import {
  askQuestion, getRandomNumber, isCorrectAnswer, playGame,
} from '../src/index.js';

const GAME_DESC = 'What number is missing in the progression?';

const getProgression = () => {
  const step = getRandomNumber(10, 1);
  const progression = [];
  const progressionLength = getRandomNumber(5, 5);
  const startNum = getRandomNumber(50, 1);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  const missingNumIndex = getRandomNumber(progressionLength);
  const missingNum = progression[missingNumIndex];
  progression[missingNumIndex] = '..';
  return [progression.join(' '), missingNum];
};

const askUser = () => {
  const [progression, missingNumber] = getProgression();
  const userAnswer = askQuestion(progression);
  return isCorrectAnswer(userAnswer, missingNumber);
};

export default () => {
  playGame(GAME_DESC, askUser);
};
