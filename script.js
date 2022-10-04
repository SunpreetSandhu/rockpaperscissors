function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1; //get num between 1 and 3
}

function playRound(playerSelection, computerSelection) {
  //finds out who won, player or comp

  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == 1) {
      console.log("It's a tie!");
      return 0;
    } else if (computerSelection == 2) {
      console.log("You Lose! Paper beats Rock");
      return 2;
    } else if (computerSelection == 3) {
      console.log("You Win! Rock beats Scissors");
      return 1;
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == 1) {
      console.log("You Win! Paper beats Rock");
      return 1;
    } else if (computerSelection == 2) {
      console.log("It's a tie!");
      return 0;
    } else if (computerSelection == 3) {
      console.log("You Lose! Scissors beats Paper");
      return 2;
    }
  } else if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection == 1) {
      console.log("You Lose! Rock beats Scissors");
      return 2;
    } else if (computerSelection == 2) {
      console.log("You Win! Scissors beats Paper");
      return 1;
    } else if (computerSelection == 3) {
      console.log("It's a tie!");
      return 0;
    }
  } else {
    console.log("You have entered an invalid response");
    return 0;
  }
}

function game() {
  // plays and sees who wins the first to 5

  let userCount = 0;
  let computerCount = 0;

  for (let i = 0; userCount != 5 || computerCount != 5; i++) {
    let playerSelection = prompt(
      "Rock / Paper / Scissors - What's Your Choice?"
    );
    let computerSelection = getComputerChoice();

    let winner = playRound(playerSelection, computerSelection);

    if (winner == 1) {
      userCount++;
    } else if (winner == 2) {
      computerCount++;
    }
  }
}

playRound(playerSelection, computerSelection);
