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
const options = ["rock", "paper", "scissors"]; //create array with 3 choice pool 

function getPlayerChoice() { //holds input of user in playerchoice
    let validatedInput = false; //variable of validatedInput is empty
    while(validatedInput == false){ //while empty
        const choice = prompt(`"Rock" "Paper" "Scissors"`); //prompt for user to put in either of the 3
        if (choice == null) { //checking empty input
            continue;
        }
        const choiceInLower = choice.toLowerCase();//.toLowerCase method convert string to lowercase to run through functions
        if (options.includes(choiceInLower)){ //checks if input is in our choice array
            validatedInput = true; //then it is true
            return choiceInLower; // return the input into lowercase to match our array items
        }
    }

}

function getComputerChoice () { //creating function name
    const computerChoice = options[Math.floor(Math.random() * options.length)]; 
    return computerChoice //return so computerChoice has a value outside of the function

}//(Math.random() * computerChoicesArray.length) in parenthesis for operation precedence(i think)
// math.random function returns random number between 0 and 1. 
// * computerChoicesArray.length mulitplies the random by the array length



function checkWinner(playerSelection, computerSelection){ //checking for winner of the two choices
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

function suggestChoice(computerSelection){ //function for a suggestion when returned computer wins in literal template
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

const suggestChoiceSelection = suggestChoice();

function playRound(playerSelection, computerSelection){ //check for returned value of checkWinner to tell user of outcome
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



function game() { //keep track of 5 rounds
    console.log(`Welcome!`)
    let playerScore = 0; //cosnt cant change value, let we can
    let computerScore = 0; //cosnt cant change value, let we can

    for (let i = 0; i < 5; i++) { //we will be changing value of i in each iteration, until i is less than 5 0-4
        const playerSelection = getPlayerChoice(); //variable for the getPlayerChoice funtion
        const computerSelection = getComputerChoice(); //variable for the getComputerChoice funtion
        console.log(playRound(playerSelection, computerSelection)); //playRound fucntion in console
        if(checkWinner(playerSelection, computerSelection) == "Player") { //checkWinner will iterate score values we let
            playerScore++; //iterates playerScore by 1
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore++; //iterates computerscore by 1
        }
    }
    console.log("Game Over")
    if (playerScore > computerScore){ //
        console.log("Player is the Winner!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer is the Winner!");
    }
    else {
        console.log("It was a tie!");
    }
}

game()

/* 
const playerSelection = "paper";
const computerSelection = getComputerChoice();
const suggestChoiceSelection = suggestChoice();
console.log(`Computer Chose ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection));
*/

