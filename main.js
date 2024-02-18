function getComputerChoice(){
    const rand = Math.random();
    let computerChoice = rand;
    if(rand % 3 === 0){
        computerChoice = "Rock"
    } else if(rand % 3 === 1){
        computerChoice = "Paper"
    } else { //===2
        computerChoice = "Scissors"
    }

    return computerChoice;
}

function getUserChoice(){
    console.log("1: Rock\n");
    console.log("2: Paper\n");
    console.log("3: Scissors\n");


}

function playGame(){

}

function playRound(playerSelection, computerSelection){

}

function getWinner(userChoice, computerChoice){

}




function main(){

}

