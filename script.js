const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  while (true) {
    const playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if (!CHOICES.includes(playerChoice)) continue;
    return playerChoice;
  }
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

console.log(computerChoice);
console.log(playerChoice);
