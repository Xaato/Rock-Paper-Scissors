const buttons = document.querySelectorAll("button")
const resultsDiv = document.querySelector("#results")
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(random){
    if (random < 0.33){
        return "rock"    
} else if(random < 0.66){
        return "paper"
    } else{
        return "scissor"
    }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice(Math.random());
    playRound(humanChoice, computerChoice);
  });
});


function playRound(humanChoice, computerChoice){
    let message = "";

    if (humanChoice === computerChoice) {
        message = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        message = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        message = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    }

    resultsDiv.textContent = `${message} Current Score: You: ${humanScore} - Computer: ${computerScore}`;
}

