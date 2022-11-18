const CHOICES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getPlayerChoice() {
  while (true) {
    const playerChoice = capitalize(prompt('Rock, Paper, or Scissors?'));
    if (!CHOICES.includes(playerChoice)) continue;
    return playerChoice;
  }
}

function playRound(computerChoice, playerChoice) {
  switch (computerChoice.concat(playerChoice)) {
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      return `You Win! ${playerChoice} beats ${computerChoice}!`;
    case 'PaperRock':
    case 'ScissorsPaper':
    case 'RockScissors':
      return `You Lose! ${computerChoice} beats ${playerChoice}!`;
    default:
      return "It's a tie!";
  }
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

console.log(playRound(computerChoice, playerChoice));
