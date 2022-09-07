let computerScore=0;
let playerScore=0;

//div manipulation
const playerScore_div = document.querySelector(".player-score");
const computerScore_div = document.querySelector(".computer-score");
const result_span = document.querySelector(".result");

//buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const playerSelection = main();
const computerSelection = computerChoice();

//get computer choice
function computerChoice() {
    const choices = ["rock","paper","scissors"]
    return (choices[Math.floor(Math.random() * choices.length)]);    
}

//get player choice
function main () {
    rock.addEventListener('click', function() {
    playRound("rock", computerChoice())
});
    paper.addEventListener('click', function() {
    playRound("paper", computerChoice())
});
    scissors.addEventListener('click', function() {
    playRound("scissors", computerChoice())
});
}

//play the game, change scores, display result message
function playRound (playerSelection, computerSelection) {

    

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        result_span.innerText = "You lose! Paper beats rock.";
        
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        result_span.innerText = ("You win! Rock beats scissors!");
       
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        result_span.innerText = ("You lose! Scissors beats paper.")
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        result_span.innerText = ("You win! Paper beats rock!")
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        result_span.innerText = ("You lose! Rock beats scissors.");
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        result_span.innerText = ("You win! Scissors beats paper!")
    }
    if (playerSelection === computerSelection) { 
        result_span.innerText = ("It's a Tie! Play again!")
    }
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = computerScore;
    
}





