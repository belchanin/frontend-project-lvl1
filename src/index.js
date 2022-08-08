import readlineSync from 'readline-sync';

const MAX_PLAY_COUNT = 3;

export const playGame = (desc, callback) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(desc);

  let isPlayedWell = true;
  for (let i = 0; i < MAX_PLAY_COUNT; i += 1) {
    const isCorrect = callback();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      isPlayedWell = false;
      break;
    }
  }
  if (isPlayedWell) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const getRandomNumber = (range = 100) => Math.floor(Math.random() * range);

export const isCorrectAnswer = (userAnswer, expectedAnswer) => {
  const isCorrect = userAnswer === String(expectedAnswer);
  if (!isCorrect) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
  } else {
    console.log('Correct!');
  }
  return isCorrect;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};
