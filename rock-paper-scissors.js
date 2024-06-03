let humanScore =0;
let computerScore =0;

function getComputerChoice(){
    let computerChoice ="";
    let random = Math.floor(Math.random() * 3);
    if(random === 0){    
        computerChoice = "rock";
    } else if (random === 1){
        computerChoice = "paper";
    } else {  //computerChoice ==2
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    return prompt("Please select a choice of \"rock\", \"paper\",\"scissors\"\n");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let statement = ""
    if(humanChoice === computerChoice){
        statement = "You tied! You chose the same thing"
    } else if (humanChoice === "rock" && computerChoice =="scissors"){
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice =="rock") {
        humanScore++;
    } else if(humanChoice === "scissors" && computerChoice =="paper"){
        humanScore++;
    } else {
        computerScore++;
        statement = "You Lose"
    }
    
    return statement;
}


function playGame(){
    for(let i=0;i<5,i++){
        playRound(humanChoice,computerChoice);
    }
}
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
  

