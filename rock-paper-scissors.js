function playerInput() {
    return prompt(("Rock, Paper, Scissors?").toLowerCase());
}

const rpcArray = ["rock", "paper", "scissors"]

function computerInput() {
    return rpcArray[Math.floor(Math.random() * rpcArray.length)];
}

// const computerSelection = computerInput();
// const playerSelection = playerInput();

let compWin = 0;
let playerWin = 0;

function playRound(playerInput, computerInput) {

    if (playerInput == computerInput) {
        console.log("It was draw!");
    } else if (playerInput == "rock" && computerInput == "scissors") {
        console.log("You won the round!");
        playerWin++;
    } else if (playerInput == "rock" && computerInput == "paper") {
        console.log("You lost the round.");
        compWin++;
    } else if (playerInput == "scissors" && computerInput == "rock") {
        console.log("You lost the round.");
        compWin++;
    } else if (playerInput == "scissors" && computerInput == "paper") {
        console.log("You won the round!");
        playerWin++;
    } else if (playerInput == "paper" && computerInput == "rock") {
        console.log("You won the round!");
        playerWin++;
    } else if (playerInput == "paper" && computerInput == "scissors") {
        console.log("You lost the round.");
        compWin++;
    }
}

for (let i = 0; i < 5; i++) {
    playRound(playerInput(), computerInput());
}

console.log(`You won ${playerWin} times, and computer won ${compWin} times.`);

function result() {
    if (playerWin > compWin) {
        console.log("You are the winner!");
    }   else if (playerWin == compWin) {
        console.log("It was draw! Thanks for playing!");
    }   else  {
        console.log("Computer won the game, sorry!");
    }
}

result();