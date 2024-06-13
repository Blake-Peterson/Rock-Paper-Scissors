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
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click",()=>{
            if(button.id === 'rock' ){
                playRound('rock', getComputerChoice());
            } else if(button.id === 'paper'){
                playRound('paper', getComputerChoice());
            } else if( button.id === 'scissors' ){
                playRound('scissors', getComputerChoice());
            }
        });
    });
}

function playRound(humanChoice, computerChoice){
    let humanChoice_lower = humanChoice.toLowerCase();
    let statement = "";
    let winner = 0;
    
    if(humanChoice_lower === computerChoice){
        winner = -1;
        statement = "You tied! You both chose "+humanChoice_lower;
    } else if (humanChoice_lower === "rock" && computerChoice =="scissors"){
        winner = 0;
        statement = "You Win! " + humanChoice_lower + " beats " + computerChoice
    } else if(humanChoice_lower === "paper" && computerChoice =="rock") {
        winner =0;
        statement = "You Win! " + humanChoice_lower + " beats " + computerChoice
    } else if(humanChoice_lower === "scissors" && computerChoice =="paper"){
        winner = 0;
        statement = "You Win! " + humanChoice_lower + " beats " + computerChoice;
    } else {
        winner = 1;
        statement = "You Lose " + computerChoice + " beats " + humanChoice;
    }
    console.log(statement)
    return winner;
}

/*
function playGame(){
    let winner =0;
    let i=0;
    for(i=0;i<5;i++){
        winner = playRound(getHumanChoice(),getComputerChoice());
        if(winner ===0){
            humanScore++;
        } else if(winner ===1){
            computerScore++;
        }
    }
    if(humanScore>computerScore){
        console.log("You won "+humanScore + " - " + computerScore+ " out of "+i);
    } else if (computerScore > humanScore) {
        console.log("You lost "+computerScore + " - " + humanScore+ " out of "+i);
    }else {
        console.log("You tied\n");
    }
}

playGame();
*/
getHumanChoice();