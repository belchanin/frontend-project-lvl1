import readlineSync from 'readline-sync';

const MAX_PLAY_COUNT = 3;

const getRandomNumber = () => Math.random() * 10;

const isEven = (num) => num % 2 === 0;

const askUser = () => {
  const randomNumber = Math.round(getRandomNumber());
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const isCorrect = expectedAnswer === userAnswer;
  if (!isCorrect) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
  } else {
    console.log('Correct!');
  }
  return isCorrect;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let isPlayedWell = true;
  for (let i = 0; i < MAX_PLAY_COUNT; i += 1) {
    const isCorrect = askUser();
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
