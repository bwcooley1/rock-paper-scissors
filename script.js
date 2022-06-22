let computerScore=0;
let playerScore=0;


function playRound (playerSelection, computerSelection) {
    

    if (playerSelection.toLowerCase()==="rock" && computerSelection==="paper") {
        return("You lose! Paper beats rock."+ "The score is "+ playerScore+" to "+(computerScore++));
        
    }
    if (playerSelection.toLowerCase()==="rock" && computerSelection==="scissors") {
        return("You win! Rock beats scissors!"+ "The score is "+ (playerScore++)+" to "+computerScore);
       
    }
    if (playerSelection.toLowerCase()==="paper" && computerSelection==="scissors") {
        return("You lose! Scissors beats paper."+ "The score is "+ playerScore+" to "+(computerScore++))
    }
    if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock") {
        return("You win! Paper beats rock!"+ "The score is "+ (playerScore++)+" to "+computerScore)
    }
    if (playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") {
        return("You lose! Rock beats scissors."+ "The score is "+ playerScore+" to "+(computerScore++))
    }
    if (playerSelection.toLowerCase()==="scissors" && computerSelection==="paper") {
        return("You win! Scissors beats paper!"+ "The score is "+ (playerScore++)+" to "+computerScore)
    }
    if (playerSelection.toLowerCase() === computerSelection) { 
        return("It's a Tie! Play again!"+"The score is "+playerScore+" to "+computerScore)
    }
}


  for (let i = 0; i < 5; i++) {
  let array = ["rock","paper","scissors"]
  const computerPlay =(array[Math.floor(Math.random() * array.length)]);
  console.log(computerPlay);
  let playerSelection=prompt ("Rock, Paper, or Scissors?");
  let computerSelection=computerPlay;
  console.log(playRound(playerSelection, computerSelection))
 
  if (playerScore ==5) {
    console.log("You beat the computer!")
  }
  if (computerScore ==5) {
    console.log("The computer smoked you!")
  }
  }