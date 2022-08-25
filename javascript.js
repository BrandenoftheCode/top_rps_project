function getPlayerChoice() {
  console.log("Please enter your choice: 'rock' (1), 'paper' (2), or 'scissors' (3)");
  let playerChoice = prompt("Enter your choice of: Rock, Paper, or Scissors! (1 , 2 , 3)");
    if (playerChoice.toLowerCase() === 'rock' || parseInt(playerChoice) === 1) {
        playerChoice = 'Rock';
    } else if (playerChoice.toLowerCase() === 'paper' || parseInt(playerChoice) === 2) {
        playerChoice = 'Paper';
    } else if (playerChoice.toLowerCase() === 'scissors' || parseInt(playerChoice) === 3) {
        playerChoice = 'Scissors';
    } else if (playerChoice.toLowerCase() !== 'rock' || 'paper' || 'scissors' || parseInt(playerChoice !== 1 || 2 || 3)) {
        alert('Uhhh wtf is you doing??? bozo.');
    } else {
        alert('Mate you really fucked up');
    }
    return playerChoice;
}
console.log(getPlayerChoice());

function getComputerChoice() {
    let rpsArray = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[computerChoice];
}

console.log(getComputerChoice());


function playRound(getPlayerChoice, getComputerChoice) {
    if (getPlayerChoice === getComputerChoice) {
        console.log("It's a tie!");
        return("You played: " + playerChoice + "Computer played: " + computerChoice);
    } else if (getPlayerChoice === "Rock" && getComputerChoice === "Paper") {
        console.log("You lose!");
        return("You played: " + playerChoice + "Computer played: " + computerChoice);
    } else if (getPlayerChoice === "Scissors" && getComputerChoice === "Paper") {
        console.log("You win!");
        return("You played: " + playerChoice + "Computer played: " + computerChoice);
    } else if (getPlayerChoice === "Rock" && getComputerChoice === "Scissors") {
        console.log("You win!");
        return("You played: " + playerChoice + "Computer played: " + computerChoice);
    } else if (getPlayerChoice === "Scissors" && getComputerChoice === "Rock") {
        console.log("You lose!");
        return("You played: " + playerChoice + "Computer played: " + computerChoice);
    } else if (getPlayerChoice === "Paper" && getComputerChoice === "Rock") {
        console.log("You win!");
        return("You played: " + playerChoice + "Computer played: " + computerChoice);
    } else if (getPlayerChoice === "Paper" && getComputerChoice === "Scissors") {
        console.log("You lose!");
        return("You played: " + playerChoice + "Computer played: " + computerChoice);
    }
}