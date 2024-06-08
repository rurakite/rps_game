let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
  let playerChoice = prompt("Please choose rock, paper, or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "It's a tie!"
          : (playerOne === "rock" && computer === "scissors") ||
            (playerOne === "paper" && computer === "rock") ||
            (playerOne === "scissors" && computer === "paper")
          ? `playerOne: ${playerOne}\nComputer: ${computer}. You win!`
          : `playerOne: ${playerOne}\nComputer: ${computer}. You lose!`;
      alert(result);

      let playAgain = confirm("Would you like to play again?");
      playAgain ? location.reload() : alert("Ok, maybe another time.");
    } else {
      alert("You did not choose rock, paper, or scissors. Please try again.");
    }
  } else {
    alert("I guess you changed your mind. Maybe another time.");
  }
} else {
  alert("Ok, maybe another time.");
}
