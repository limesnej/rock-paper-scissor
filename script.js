let arr = ["scissor", "rock", "paper"];


function getComputerChoice() {
    // should return rock, paper or scissor
    //Math.random() random number between 
    // multiply it by arraylength to get the numbers between 0 -arraylength
    // math.floor to get the index ranging from 0 to arraylength -1, since length is 3 and index should be 0 to 2
    return arr[Math.floor((Math.random() * arr.length))]
}

console.log(getComputerChoice())
