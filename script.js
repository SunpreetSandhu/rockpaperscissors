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

  let winCond = 0;

  for (let i = 0; winCond == 0; i++) {
    let playerSelection = prompt(
      "Rock / Paper / Scissors - What's Your Choice? First to 5 wins..."
    );
    let computerSelection = getComputerChoice();

    let winner = playRound(playerSelection, computerSelection);

    if (winner == 1) {
      userCount++;
    } else if (winner == 2) {
      computerCount++;
    }

    if (userCount == 5 || computerCount == 5) {
      winCond++;
    }

    if (winCond == 0) {
      if (userCount > computerCount) {
        console.log("You are winning " + userCount + " to " + computerCount);
      } else if (computerCount > userCount) {
        console.log("You are losing " + computerCount + " to " + userCount);
      } else if (userCount == computerCount) {
        console.log("Game is tied " + userCount + " to " + computerCount);
      }
    }
  }
}

let userCount = 0;
let computerCount = 0;
game();
if (userCount == 5) {
  console.log(
    "Congragulations! You won! The final score was " +
      userCount +
      " to " +
      computerCount +
      "."
  );
} else if (computerCount == 5) {
  console.log(
    "Oh no! You lost! Refresh the page to play again. The final score was " +
      userCount +
      " to " +
      computerCount +
      "."
  );
}
