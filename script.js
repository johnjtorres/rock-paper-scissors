const CHOICES = ['Rock', 'Paper', 'Scissors'];
const rounds = 5;

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  if (str === '') return '';
  if (!str) return;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getPlayerChoice() {
  while (true) {
    const playerChoice = capitalize(prompt('Rock, Paper, or Scissors?'));
    if (CHOICES.includes(playerChoice)) return playerChoice;
    if (playerChoice === '') continue;
    if (!playerChoice) return;
  }
}

function playRound(computerChoice, playerChoice) {
  switch (computerChoice.concat(playerChoice)) {
    case 'PaperRock':
    case 'ScissorsPaper':
    case 'RockScissors':
      return 1;
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      return 2;
    default:
      return 0;
  }
}

function printChoices(round, computerChoice, playerChoice) {
  console.log(`Round ${round}: ${computerChoice} vs ${playerChoice}`);
}

function printRoundWinner(winner) {
  let result = "*****It's a tie!*****";
  if (winner === 1) {
    result = `****You lose!*****`;
  }
  if (winner === 2) {
    result = '*****You win!*****';
  }
  console.log(result);
}

function printGameWinner(computerScore, playerScore) {
  if (computerScore === playerScore) {
    console.log(`Tie game ${computerScore} to ${computerScore}`);
  }
  if (computerScore > playerScore) {
    console.log(`Computer beats player ${computerScore} to ${playerScore}`);
  }
  if (playerScore > computerScore) {
    console.log(`Player beats computer ${playerScore} to ${computerScore}`);
  }
}

function game(rounds) {
  let computerScore = 0;
  let playerScore = 0;
  let computerChoice, playerChoice;

  for (let round = 1; round <= rounds; round++) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    if (!playerChoice) return;
    printChoices(round, computerChoice, playerChoice);
    winner = playRound(computerChoice, playerChoice);
    printRoundWinner(round, winner);
    if (winner === 1) computerScore++;
    if (winner === 2) playerScore++;
  }
  printGameWinner(computerScore, playerScore);
}

game(rounds);
