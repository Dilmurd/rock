const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    userChoiceDisplay.textContent = `Player: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Draw";
  }
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    return "Winner winner chicken dinner";
  }
  return "Lose";
}
