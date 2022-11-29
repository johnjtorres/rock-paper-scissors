const CHOICES = ['rock', 'paper', 'scissors'];
const MAX_ROUNDS = 5;

let isGameOver = false;

const playerScore = document.querySelector('div.player>div.score');
const computerScore = document.querySelector('div.computer>div.score');

const rock = document.querySelector('div[data-choice="rock"]');
const paper = document.querySelector('div[data-choice="paper"]');
const scissors = document.querySelector('div[data-choice="scissors"]');
const playerChoices = [rock, paper, scissors];

const computerChoice = document.querySelector(
  'div.computer>div.rps>div[data-choice]>img'
);

let curRound = 1;
const round = document.querySelector('div.round');

playerChoices.forEach((choice) => {
  choice.addEventListener('click', game);
});

function game(event) {
  unselectImages();
  event.currentTarget.classList.add('selected');
  const playerChoice = this.getAttribute('data-choice');
  const computerChoice = getComputerChoice();
  updateComputerChoiceImage(computerChoice);
  console.log('Player choice:', playerChoice);
  console.log('Computer choice:', computerChoice);
  playRound(computerChoice, playerChoice);
  checkWinner();
  if (!isGameOver) updateRoundNumber();
}

function unselectImages() {
  const imgs = document.querySelectorAll('.selected');
  imgs.forEach((img) => {
    img.classList.toggle('selected');
  });
}

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function updateComputerChoiceImage(choice) {
  computerChoice.classList.remove('hidden');
  computerChoice.src = `images/${choice}.svg`;
}

function playRound(computerChoice, playerChoice) {
  switch (computerChoice.concat(playerChoice)) {
    case 'paper' + 'rock':
    case 'scissors' + 'paper':
    case 'rock' + 'scissors':
      console.log('Computer wins round!');
      computerScore.textContent++;
      break;
    case 'rock' + 'paper':
    case 'paper' + 'scissors':
    case 'scissors' + 'rock':
      console.log('Player wins round!');
      playerScore.textContent++;
      break;
    default:
      console.log('Tie round!');
      return;
  }
}

function updateRoundNumber() {
  curRound++;
  round.textContent = `Round ${curRound}`;
}

function getPlayerScore() {
  return parseInt(playerScore.textContent);
}

function getComputerScore() {
  return parseInt(computerScore.textContent);
}

function checkWinner() {
  if (getPlayerScore() >= MAX_ROUNDS) gameOver('Player');
  if (getComputerScore() >= MAX_ROUNDS) gameOver('Computer');
}

function gameOver(winner) {
  isGameOver = true;
  // Hide rock, paper, symbol divs
  [...playerChoices, computerChoice].forEach((choice) => {
    choice.classList.toggle('hidden');
  });
  // Announce winner
  round.textContent = `${winner} wins!`;
}
