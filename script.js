let array = ["rock","paper","scissors"]
const computerPlay = array[Math.floor(Math.random() * array.length)];
console.log(computerPlay);




function playRound (playerSelection, computerSelection) {
    

    if (playerSelection.toLowerCase()==="rock",computerSelection==="paper") {
        return("You lose! Paper beats rock.")
    }
    else if (playerSelection.toLowerCase()==="rock",computerSelection==="scissors") {
        return("You win! Rock beats scissors!")
    }
    else if (playerSelection.toLowerCase()==="paper",computerSelection==="scissors") {
        return("You lose! Scissors beats paper.")
    }
    else if (playerSelection.toLowerCase()==="paper",computerSelection==="rock") {
        return("You win! Paper beats rock!")
    }
    else if (playerSelection.toLowerCase()==="scissors",computerSelection==="rock") {
        return("You lose! Rock beats scissors.")
    }
    else if (playerSelection.toLowerCase()==="scissors",computerSelection==="paper") {
        return("You win! Scissors beats paper!")
    }
    else if (playerSelection.toLowerCase() === computerSelection) { 
        return("It's a Tie! Play again!")
    }
}

const playerSelection=prompt ("Rock, Paper, or Scissors?");
const computerSelection=computerPlay;
console.log(playRound(playerSelection, computerSelection));
