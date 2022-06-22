let computerScore=0;
let playerScore=0;


function playRound (playerSelection, computerSelection) {
    

    if (playerSelection.toLowerCase()==="rock" && computerSelection==="paper") {
        computerScore++;
        return("You lose! Paper beats rock."+ "The score is "+ playerScore+" to "+computerScore);
        
    }
    if (playerSelection.toLowerCase()==="rock" && computerSelection==="scissors") {
        playerScore++;
        return("You win! Rock beats scissors!"+ "The score is "+ playerScore+" to "+computerScore);
       
    }
    if (playerSelection.toLowerCase()==="paper" && computerSelection==="scissors") {
        computerScore++;
        return("You lose! Scissors beats paper."+ "The score is "+ playerScore+" to "+computerScore)
    }
    if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock") {
        playerScore++;
        return("You win! Paper beats rock!"+ "The score is "+ playerScore+" to "+computerScore)
    }
    if (playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") {
        computerScore++;
        return("You lose! Rock beats scissors."+ "The score is "+ playerScore+" to "+computerScore);
    }
    if (playerSelection.toLowerCase()==="scissors" && computerSelection==="paper") {
        playerScore++;
        return("You win! Scissors beats paper!"+ "The score is "+ playerScore+" to "+computerScore)
    }
    if (playerSelection.toLowerCase() === computerSelection) { 
        return("It's a Tie! Play again!"+"The score is "+playerScore+" to "+computerScore)
    }
        
}


  for (let i = 0; ; i++) {
  let array = ["rock","paper","scissors"]
  const computerPlay =(array[Math.floor(Math.random() * array.length)]);
  //console.log(computerPlay);
  let playerSelection=prompt ("Rock, Paper, or Scissors?");
  let computerSelection=computerPlay;
  console.log(playRound(playerSelection, computerSelection))
 
  if (playerScore ==5) {
    alert("You beat the computer!")
  }
  if (computerScore ==5) {
    alert("The computer smoked you!")
  }
  }