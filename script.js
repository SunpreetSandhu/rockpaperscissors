function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function playRound(playerSelection, computerSelection) {
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
  let winner = 0;
  const container = document.querySelector("#container");
  const results = document.createElement("div");
  container.appendChild(results);

  const disp = document.createElement("p");
  container.appendChild(disp);
  results.textContent = "You: 0 | Computer: 0";
  disp.textContent = "Get 5 to Win!";

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let computerSelection = getComputerChoice();
      let playerSelection = button.className;
      let winner = playRound(playerSelection, computerSelection);
      let b = userCount == 0 && computerCount == 0;
      if (winner == 1) {
        userCount++;
        results.textContent =
          "You: " + userCount + " | Computer: " + computerCount;
        disp.textContent = "You Won That Round!";
      } else if (winner == 2) {
        computerCount++;
        results.textContent =
          "You: " + userCount + " | Computer: " + computerCount;
        disp.textContent = "You Lost That Round!";
      } else if (winner == 0) {
        results.textContent =
          "You: " + userCount + " | Computer: " + computerCount;

        disp.textContent = "That Round Was a Tie!";
      }

      if (userCount == 5) {
        disp.textContent = "You Win!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;

        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again!";
        container.appendChild(playAgain);
        playAgain.addEventListener("click", () => {
          location.reload();
        });
      } else if (computerCount == 5) {
        disp.textContent = "Computer Wins!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;

        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again!";
        container.appendChild(playAgain);
        playAgain.addEventListener("click", () => {
          location.reload();
        });
      }
    });
  });
}

let userCount = 0; //global variables
let computerCount = 0;

game();
