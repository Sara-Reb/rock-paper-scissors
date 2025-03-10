const winningCouples = [
  ["Rock", "Scissors"],
  ["Paper", "Rock"],
  ["Scissors", "Paper"],
];
let humanScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");

const choices = document.querySelectorAll(".choice");
for (choice of choices) {
  choice.addEventListener("click", (e) => {
    results.innerHTML = "";

    // Store player choice
    let playerSelection = e.target.innerText.toLowerCase();
    playerSelection =
      playerSelection[0].toUpperCase() + playerSelection.slice(1);

    // Computer choice
    const computerSelection = getComputerChoice();

    // Display choices
    const playerChoicePara = document.createElement("p");
    playerChoicePara.innerText = `Player choice: ${playerSelection}`;

    const computerChoicePara = document.createElement("p");
    computerChoicePara.innerText = `Computer choice: ${computerSelection}`;

    results.appendChild(playerChoicePara);
    results.appendChild(computerChoicePara);
    // Play round
    resultText = playRound(computerSelection, playerSelection);
    const resultPara = document.createElement("p");
    resultPara.appendChild(resultText);
    resultPara.setAttribute("style", "font-weight:800; font-size:24px");
    results.appendChild(resultPara);

    let scoresPara = document.createElement("p");
    scoresPara.innerText = `Player's score: ${humanScore}   Computer's score: ${computerScore}`;
    results.appendChild(scoresPara);
    console.log("hs" + humanScore + " cs" + computerScore);
    if (humanScore === 5 || computerScore === 5) {
      let winner = document.createElement("p");
      if (humanScore === 5) {
        winner.innerText = `The winner is... YOU!`;
      } else if (computerScore === 5) {
        winner.innerText = `The winner is... THE COMPUTER!`;
      }
      winner.setAttribute(
        "style",
        "font-size:28px; font-weight:900; color: red"
      );
      results.appendChild(winner);
      humanScore = 0;
      computerScore = 0;
    }
  });
}

//playGame();

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
    const resultText = document.createTextNode("Tie!");
    console.log("Tie!");

    return resultText;
  }

  for (let i = 0; i < winningCouples.length; i++) {
    if (winningCouples[i].toString() === choiceCouple.toString()) {
      const resultText = document.createTextNode(
        `You lose! ${computerChoice} beats ${humanChoice}.`
      );

      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
      return resultText;
    }
  }
  const resultText = document.createTextNode(
    `You win! ${humanChoice} beats ${computerChoice}.`
  );
  console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  humanScore++;

  return resultText;
}

/* // Calls playRound five times and declares the winner at the end
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
} */
