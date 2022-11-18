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

function game(rounds, playerName) {
  const players = [
    { name: 'computer', score: 0 },
    { name: playerName, score: 0 },
  ];

  for (let i = 0; i < rounds; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    let outcome = `Round ${i}: `;
    outcome += playRound(computerChoice, playerChoice);
    console.log(outcome);
    if (outcome.includes('You Lose')) {
      players[0]['score']++;
    }
    if (outcome.includes('You Win')) {
      players[1]['score']++;
    }
  }

  let gameOutcome = `Tie game with a score of ${computerScore} to ${computerScore}!`;
  if (playerScore > computerScore) {
    gameOutcome = `You beat computer with a score of `;
    gameOutcome += `${playerScore} to ${computerScore}!`;
  }
  if (playerScore < computerScore) {
    gameOutcome = `Computer beat you with a score of ${computerScore} to ${playerScore}!`;
  }
  console.log(gameOutcome);
}

const rounds = 5;
const playerName = 'player';
game(rounds, playerName);
