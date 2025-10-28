let choise = prompt("Type Rock, Paper or Scissor")

let random = Math.random();

function getComputerChoice(random){
    if (random < 0.33){
return "stone"    
} else if(random < 0.66){
        return "paper"
    } else{
        return "scissor"
    }
}

function getHumanChoise(choise){
let chance = choise.toLowerCase();
console.log(chance);
}

function compare(choise, computerChoice){
    if(choise === computerChoice) {
        console.log("Player win")
    } else {
        console.log("Computer win")
    }
}
let computerChoice = getComputerChoice(random);
console.log(computerChoice);
getHumanChoise(choise);
compare(choise, computerChoice);