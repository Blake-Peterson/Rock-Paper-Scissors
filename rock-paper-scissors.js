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
    let statement = "";
    let winner = 0;
    if(humanChoice === computerChoice){
        winner = -1;
        statement = "You tied! You both chose "+humanChoice;
    } else if (humanChoice === "rock" && computerChoice =="scissors"){
        winner = 0;
        statement = "You Win! " + humanChoice + " beats " + computerChoice
    } else if(humanChoice === "paper" && computerChoice =="rock") {
        winner =0;
        statement = "You Win! " + humanChoice + " beats " + computerChoice
    } else if(humanChoice === "scissors" && computerChoice =="paper"){
        winner = 0;
        statement = "You Win! " + humanChoice + " beats " + computerChoice;
    } else {
        winner = 1;
        statement = "You Lose" + computerChoice + " beats " + humanChoice;
    }

    console.log(statement)
    
    return winner;
}


function playGame(){
    let winner =0;
    for(let i=0;i<5;i++){
        winner = playRound(humanChoice,computerChoice);
        if(winner ===0){
            humanScore++;
        } else if(winner ===1){
            computerScore++;
        }
    }
    if(humanScore>computerScore){
        console.log("You won "+humanScore + " vs. " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("You lost "+computerScore + " vs. " + humanScore);
    }else {
        console.log("You tied\n");
    }
}
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
  

