const CHOICES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  if (!str) return;
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

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let computerChoice, playerChoice;

  for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    let outcome = `Round ${i + 1}: `;
    outcome += playRound(computerChoice, playerChoice);
    console.log(outcome);
    if (outcome.includes('Lose')) {
      computerScore++;
    }
    if (outcome.includes('Win')) {
      playerScore++;
    }
  }

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

game();
