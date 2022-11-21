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
      return 0;
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      return 1;
    default:
      return -1;
  }
}

function printChoices(round, computerChoice, playerChoice) {
  console.log(`Round ${round}: ${computerChoice} vs ${playerChoice}`);
}

function printRoundWinner(winner) {
  switch (winner) {
    case 0:
      console.log('****You lose!*****');
      break;
    case 1:
      console.log('*****You win!*****');
      break;
    default:
      console.log("*****It's a tie!*****");
  }
}

function printGameWinner(scores) {
  if (scores[0] === scores[1]) {
    console.log(`Tie game ${scores[0]} to ${scores[0]}`);
  }
  if (scores[0] > scores[1]) {
    console.log(`Computer beats player ${scores[0]} to ${scores[1]}`);
  }
  if (scores[1] > scores[0]) {
    console.log(`Player beats computer ${scores[1]} to ${scores[0]}`);
  }
}

function game(rounds) {
  let scores = [0, 0];
  let computerChoice, playerChoice, roundWinner;

  for (let round = 1; round <= rounds; round++) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    // End the game if user cancels the prompt
    if (!playerChoice) return;

    printChoices(round, computerChoice, playerChoice);
    roundWinner = playRound(computerChoice, playerChoice);
    printRoundWinner(roundWinner);
    if (roundWinner >= 0) scores[roundWinner]++;
  }
  printGameWinner(scores);
}

game(rounds);
