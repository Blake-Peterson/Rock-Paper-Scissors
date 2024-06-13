let humanScore =0;
let computerScore =0;

const userResultDisplay = document.getElementById("user");
const computerResultDisplay = document.getElementById("computer");

userResultDisplay.textContent = 0;
computerResultDisplay.textContent = 0;

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
        if(computerScore<5 && humanScore<5){
            button.addEventListener("click",()=>{
                if(button.id === 'rock' ){
                    playRound('rock', getComputerChoice());
                } else if(button.id === 'paper'){
                    playRound('paper', getComputerChoice());
                } else if( button.id === 'scissors' ){
                    playRound('scissors', getComputerChoice());
                }
            });          
        } else if(humanScore==5) {
            const p = document.createElement("div");
            p.classList.add("winner");
            p.textContent = "User Wins!"+ humanScore + "VS"+ computerScore;
            const container = document.querySelector("#results-container");
            container.appendChild(p);
        } else {
            const p = document.createElement("div");
            p.classList.add("winner");
            p.textContent = "Computer Wins!" +computerScoreScore + "VS"+ humanScoreScore;
            const container = document.querySelector("#results-container");
            container.appendChild(p);
            humanScore =0;
            computerScore=0;
        }
    });
}

function playRound(humanChoice, computerChoice){
    let humanChoice_lower = humanChoice.toLowerCase();
    let statement = "";
    let winner = 0;
    
    if(humanChoice_lower === computerChoice){
        
    } else if (humanChoice_lower === "rock" && computerChoice =="scissors"){
        humanScore++;
        userResultDisplay.textContent = humanScore;
        //statement = "You Win! " + humanChoice_lower + " beats " + computerChoice
    } else if(humanChoice_lower === "paper" && computerChoice =="rock") {
        humanScore++;
        userResultDisplay.textContent = humanScore;
        //statement = "You Win! " + humanChoice_lower + " beats " + computerChoice
    } else if(humanChoice_lower === "scissors" && computerChoice =="paper"){
        //statement = "You Win! " + humanChoice_lower + " beats " + computerChoice;
        humanScore++;
        userResultDisplay.textContent = humanScore;
    } else {
        computerScore++;
        computerResultDisplay.textContent = computerScore;
        //statement = "You Lose " + computerChoice + " beats " + humanChoice;
    }
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