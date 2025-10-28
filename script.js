let choise = prompt("Type Rock, Paper or Scissor")

let random = Math.random();

function getComputerChoice(random){
    if (random < 0.33){
        console.log("stone")
    }
    else if(random < 0.66){
        console.log("paper")
    } else{
        console.log("scissor")
    }
}

function getHumanChoise(choise){
let chance = choise.toLowerCase();

console.log(chance);

}

getHumanChoise(choise);
getComputerChoice(random);