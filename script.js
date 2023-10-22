let arr = ["Scissor", "Rock", "Paper"];


function getComputerChoice() {
    // should return rock, paper or scissor
    //Math.random() random number between 
    // multiply it by arraylength to get the numbers between 0 -arraylength
    // math.floor to get the index ranging from 0 to arraylength -1, since length is 3 and index should be 0 to 2
    return arr[Math.floor((Math.random() * arr.length))]
}



function playRound(playerSelection, computerSelection){
    // make rules of rock paper scissors here
    let statement = "";
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissor")
    {
        statement = "win";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        statement = "loss";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock")
    {
        statement = "tie";
    }
    else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "scissor")
    {
        statement = "tie";
    }
    else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper"){
        statement = "win";
    }
    else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "rock")
    {
        statement = "loss";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissor")
    {
        statement = "win";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper"){
        statement = "tie";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")
    {
        statement = "loss";
    }
    
    return statement;
}

let i= 0;
let y = 0;

function game(){
        let playerSelection = prompt("what?");
        let computerSelection = getComputerChoice();
        if (playRound(playerSelection, computerSelection) === "win")
        {
            i++;
            console.log("human won!");
            console.log("The value of i is: " + i);
        }
        else if (playRound(playerSelection, computerSelection) === "tie")
        {
            console.log("tie");
            console.log("The value of y is: " + y);
            console.log("The value of i is: " + i);

        }
        else if (playRound(playerSelection, computerSelection) === "loss") {
            y++;
            console.log("computer won!");
            console.log("The value of y is: " + y);
            console.log("The value of i is: " + i);

        }
    
    
    
    
}

game();