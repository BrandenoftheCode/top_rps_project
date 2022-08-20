let playerInput1 = prompt('Test your luck! Input Rock, Paper, or Scissors:', );
let playerInput = playerInput1.toLowerCase();
if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
   console.log(playerInput);
}
 else {
    alert('You didnt enter your choice correctly!')
 } // Determines if player inputted their play correctly; returns error message if they didn't.

let computerChoiceArray = ['rock', 'paper', 'scissors'];
let computerInput = computerChoiceArray[Math.floor(Math.random() *computerChoiceArray.length)]; // Determines play for computer.

console.log(computerInput);


 if (playerInput === computerInput) {
  console.log('Its a tie! Play again');
   } else if (playerInput === 'rock' && computerInput === 'scissors') {
     console.log('You win! Computer played scissors.');
   } else if (playerInput === 'rock' && computerInput === 'paper') {
    console.log('You lose! Computer played paper.');
   } else if (playerInput === 'paper' && computerInput === 'rock') {
    console.log('You win! Computer played rock.');
   } else if (playerInput === 'paper' && computerInput === 'scissors') {
    console.log('You lose! Computer played scissors');
   } else if (playerInput === 'scissors' && computerInput === 'rock') {
    console.log('You lose! Computer played rock.');
   } else if (playerInput === 'scissors' && computerInput === 'paper') {
    console.log('You win! Computer played paper.');
   }