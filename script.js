let array = ["rock","paper","scissors"]
const computerPlay =(array[Math.floor(Math.random() * array.length)])
console.log(computerPlay);

const playerSelection=prompt ("Rock, Paper, or Scissors?");
const computerSelection=computerPlay;


function playRound (playerSelection, computerSelection) {
    

    if (playerSelection.toLowerCase()==="rock" && computerSelection==="paper") {
        return("You lose! Paper beats rock.")
    }
    if (playerSelection.toLowerCase()==="rock" && computerSelection==="scissors") {
        return("You win! Rock beats scissors!")
    }
    if (playerSelection.toLowerCase()==="paper" && computerSelection==="scissors") {
        return("You lose! Scissors beats paper.")
    }
    if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock") {
        return("You win! Paper beats rock!")
    }
    if (playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") {
        return("You lose! Rock beats scissors.")
    }
    if (playerSelection.toLowerCase()==="scissors" && computerSelection==="paper") {
        return("You win! Scissors beats paper!")
    }
    if (playerSelection.toLowerCase() === computerSelection) { 
        return("It's a Tie! Play again!")
    }
}


console.log(playRound(playerSelection,computerSelection));

//function game () {
//for (let i = 0; i < 5; i++) {
    // your code here!
// }
//}