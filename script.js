const CHOICES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());
