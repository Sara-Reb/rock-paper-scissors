const winningCouples = [
  ["Rock", "Scissors"],
  ["Paper", "Rock"],
  ["Scissors", "Paper"],
];
let humanScore = 0;
let computerScore = 0;

playGame();

// Randomly return one of; 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {
  // Random number between 1 and 3
  let n = Math.floor(Math.random() * 3) + 1;
  let choice;
  if (n == 1) {
    choice = "Rock";
  } else if (n == 2) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
}

// Return user choice
function getHumanChoice() {
  let keepGoing = true;
  let choice;
  while (keepGoing) {
    keepGoing = false;
    let input = prompt("Rock, Paper, Scissors?");
    if (input.toUpperCase() == "ROCK") {
      choice = "Rock";
    } else if (input.toUpperCase() == "PAPER") {
      choice = "Paper";
    } else if (input.toUpperCase() == "SCISSORS") {
      choice = "Scissors";
    } else {
      alert("Invalid choice");
      keepGoing = true;
    }
  }
  return choice;
}

// Plays a single round given the human and computer choices, then print the winner
function playRound(computerChoice, humanChoice) {
  let choiceCouple = [computerChoice, humanChoice];
  if (computerChoice == humanChoice) {
    console.log("Tie!");
    return;
  }

  for (let i = 0; i < winningCouples.length; i++) {
    if (winningCouples[i].toString() === choiceCouple.toString()) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
      return;
    }
  }
  console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  humanScore++;
  return;
}

// Calls playROund five times and declares the winner at the end
function playGame() {
  // For five rounds
  for (let i = 0; i < 5; i++) {
    // Log and store computer choice
    const computerSelection = getComputerChoice();
    console.log("Computer choice: " + computerSelection);
    // Log and store user choice
    const humanSelection = getHumanChoice();
    console.log("Human choice: " + humanSelection);
    playRound(computerSelection, humanSelection);
  }
  if (computerScore > humanScore) {
    console.log("Sorry, the computer wins.");
  } else if (computerScore < humanScore) {
    console.log("Congratulations, you win!");
  } else {
    console.log("It's a tie!");
  }
}
