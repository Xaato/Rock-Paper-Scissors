let choice = prompt("Type Rock, Paper or Scissor")
let random = Math.random();
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(random){
    if (random < 0.33){
        return "stone"    
} else if(random < 0.66){
        return "paper"
    } else{
        return "scissor"
    }
}

function getHumanChoise(choice){
let chance = choice.toLowerCase();
return chance;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }
    console.log(`Current Score: You: ${humanScore} - Computer: ${computerScore}`);
}

let computerChoice = getComputerChoice(random);
let humanChoice = getHumanChoise(choice);
playRound(humanChoice, computerChoice);

