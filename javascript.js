let playerSelectionPrompt = prompt('Test your luck! Input Rock, Paper, or Scissors:', );
let playerSelection = playerSelectionPrompt.toLowerCase();
if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
   console.log(playerSelection);
}
    else {
    alert('You didnt enter your choice correctly!')
 } // Determines if player inputted their play correctly; returns error message if they didn't.

function getComputerChoice(arr) {
const randomIndex = Math.floor(Math.random() * array.length);
const item = arr[randomIndex];
return item;
}
const array = ['rock', 'paper', 'scissors'];
const computerSelection = getComputerChoice(array);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {    
        return 2;
         } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
         return 1;
         } else if (playerSelection === 'rock' && computerSelection === 'paper') {
         return 0;
         } else if (playerSelection === 'paper' && computerSelection === 'rock') {
         return 1;
         } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
         return 1;
         } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
         return 0;
         } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
         return 1;
         }
  }

  let wL = playRound(playerSelection, computerSelection);

  console.log(wL);

  function game(wL) {
    for (let i = 0; i < 5; i++) {
        if (wL === 1) {
            return 'Win for player';
        } else if (wL === 0) {
            return 'Loss for player';
        } else if (wL === 2) {
            return 'It was a tie!'
        }
    }
}
let winTally = 0;

console.log(game(wL));