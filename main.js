// 1. make a function that will randomly return rock paper or scissors.
// 2. function that does a single round of Rock paper scissors 
//3. two parameters of playerselection (case insensitive) and computerselection
//4.  return a string that declares winner of a round

//function gCC random choice between rps
// function to loop only once
//ask for user input of rps, case insenstive
//set win/lose parameters compared to computer choice
//return win loss to user between input and random choice 

const computerChoicesArray = ["rock", "paper", "scissors"]; //create array with 3 choice pool 

function getComputerChoice () { //creating function name
    return computerChoicesArray[Math.floor(Math.random() * computerChoicesArray.length)]; //random is 0 to x.9999. math.Floor rounds decimal down to choose what object in the array. .length tells what number to multiply by length of array
}

function playRound () {

}

function playerChoice() {
    
}
