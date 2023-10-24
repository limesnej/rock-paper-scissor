let arr = ["Scissor", "Rock", "Paper"];


let btnRock = document.querySelector("#rock");

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
        statement = "loss";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper"){
        statement = "tie";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")
    {
        statement = "win";
    }
    
    return statement;
}

let i= 0;
let y = 0;
let myResults = document.querySelector(".results");
const para = document.createElement("p");
para.setAttribute("id", "score");
const paraWinner = document.createElement("p");
paraWinner.setAttribute("id", "winner");

const compChoice = document.createElement("p");
compChoice.setAttribute("id", "compChoice");

myResults.appendChild(compChoice);
myResults.appendChild(para);
myResults.appendChild(paraWinner);

function dispComp(value1, value2){
    document.querySelector("#compChoice").innerHTML = "Computer chose: " + value1 + ". " + "Human Chose: " + value2;
}

function changeText(value1, value2)
{
    document.querySelector("#score").innerHTML = "Human score: " + value1 + " " + "Computer score: " + value2;
}

function winnerText(value){
    document.querySelector("#winner").innerHTML = value;
}


const btns = document.querySelectorAll("button");
Array.from(btns).forEach(function(btn) {
    btn.addEventListener("click", function(){
        let playerSelection = this.value;
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        
        
        if (playRound(playerSelection, computerSelection) === "win")
        {
            i++;
            dispComp(computerSelection, playerSelection);
            changeText(i,y);
            if (i === 3)
            {
                winnerText("Human won! congrats");
                i = 0;
                y = 0;
            }
        }
        else if (playRound(playerSelection, computerSelection) === "tie")
        {
            dispComp(computerSelection, playerSelection);

        }
        else if (playRound(playerSelection, computerSelection) === "loss") {
            y++;
            dispComp(computerSelection, playerSelection);
            changeText(i,y);
            if (y === 3)
            {
                winnerText("Computer won! congrats");
                y = 0;
                i = 0;
            }

        }
        
    });
    
});