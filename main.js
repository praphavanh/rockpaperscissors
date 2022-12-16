// 1. make a function that will randomly return rock paper or scissors.
// 2. function that does a single round of Rock paper scissors 
//3. two parameters of playerselection (case insensitive) and computerselection
//4.  return a string that declares winner of a round

//function gCC random choice between rps
// function to loop only once
//ask for user input of rps, case insenstive
//set win/lose parameters compared to computer choice
//return win loss to user between input and random choice 
//return computerChoicesArray[Math.floor(Math.random() * computerChoicesArray.length)]; //random is 0 to x.9999. math.Floor rounds decimal down to choose what object in the array. .length tells what number to multiply by length of array
const computerOptionsArray = ["rock", "paper", "scissors"]; //create array with 3 choice pool 
const playerSelection = "paper";

function getComputerChoice () { //creating function name
    const computerChoice = computerOptionsArray[Math.floor(Math.random() * computerOptionsArray.length)]; //computerChoicesArray[] brcomputerSelectionackets since its array
    return computerChoice //return so computerChoice has a value outside of the function
    console.log(`Computer Chose ${computerSelection}`);
}//(Math.random() * computerChoicesArray.length) in parenthesis for operation precedence(i think)
// math.random function returns random number between 0 and 1. 
// * computerChoicesArray.length mulitplies the random by the array length

const computerSelection = getComputerChoice();

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function suggestChoice(){
    if (computerSelection == "scissors"){
        return "rock";
    }
    else if (computerSelection == "paper"){
        return "scissors";
    }
    else {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return `It's a Tie! ${playerSelection} was on their mind too.`;
    }
    else if(result == "Player"){
        return `Player Won! ${playerSelection} beats ${computerSelection}`;  
    }   
    else {
        return `Computer won with ${computerSelection}... maybe choose ${suggestChoiceSelection} next time instead of 
        ${playerSelection}.`;
    }
}

//testing


const suggestChoiceSelection = suggestChoice();
console.log(`Computer Chose ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection));


