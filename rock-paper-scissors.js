const sound = new Audio("./sound/effect2.wav");
const applause = new Audio("./sound/applause.wav")

const rpcArray = ["Rock", "Paper", "Scissors"]

function computerInput() {
  return rpcArray[Math.floor(Math.random() * rpcArray.length)];
}

// a whole game starts here

function gameStart() {
  
    let playerWin = 0;
    let compWin = 0;
  
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.volume = 0.5;
        sound.play();
        const playerSelection = button.textContent;
        const computerSelection = computerInput();
        roundResultTextHolder.textContent = playRound(playerSelection, computerSelection);
        playerWinTextHolder.textContent = "Player win count: " + playerWin;
        computerWinTextHolder.textContent = "Computer win count: " + compWin;      
        finishGame();
        });
    });

    function playRound(playerSelection, computerSelection) {
	    const draw = "It was draw!"
        const win = "You won the round! Well done!"
        const lose = "You lost the round."
        if (playerSelection == computerSelection) {
            return draw;
        } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            playerWin++;
            console.log(playerWin);
            return win;
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
            compWin++;
            console.log(compWin);
 	        return lose;
        } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
            compWin++;
            console.log(compWin);
            return lose;
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            playerWin++;
            console.log(playerWin);
            return win;
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            playerWin++;
            console.log(playerWin);
            return win;
        } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            compWin++;
            console.log(compWin);
            return lose;
        }
    }

    function finishGame() {
        if (playerWin == 5) {
            gameResultTextHolder.textContent = "You are the winner! Here's your cup!"
            applause.play();
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
            document.getElementById("btn3").disabled = true;

            const playMoreButton = document.createElement("button");
            playMoreButton.textContent = ("Play More!");
            playMoreButton.classList.add("play-more");
            resultContainer.appendChild(playMoreButton);

            playMoreButton.addEventListener("click", () => {
                window.location.reload();
            });

        }   else if  (compWin == 5) {
            gameResultTextHolder.textContent = "Sorry, our computer won the game."
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
            document.getElementById("btn3").disabled = true;

            const playMoreButton = document.createElement("button");
            playMoreButton.textContent = ("Play More!");
            playMoreButton.setAttribute("id", "btn4");
            resultContainer.appendChild(playMoreButton);

            playMoreButton.addEventListener("click", () => {
                window.location.reload();
            });
        } 
    }
}

gameStart();


const resultContainer = document.getElementById("result-container");

const playerWinTextHolder = document.createElement('div');
playerWinTextHolder.classList.add("playerwin");
resultContainer.appendChild(playerWinTextHolder);

const computerWinTextHolder = document.createElement('div');
computerWinTextHolder.classList.add("computerwin");
resultContainer.appendChild(computerWinTextHolder);

const roundResultTextHolder = document.createElement('div');
roundResultTextHolder.classList.add("round-result");
resultContainer.appendChild(roundResultTextHolder);

const gameResultTextHolder = document.createElement('h2');
gameResultTextHolder.style.color = "brown";
gameResultTextHolder.classList.add("game-result");
resultContainer.appendChild(gameResultTextHolder);
