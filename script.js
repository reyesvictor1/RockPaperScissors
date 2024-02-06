let globalPlayerScore = 0;
let globalComputerScore = 0;

const roundChoices = document.querySelector("#round-choices");
const roundResults = document.querySelector("#round-results");
const computerScore = document.querySelector("#computer-score");
const playerScore = document.querySelector("#player-score");

const gameButtons = document.querySelectorAll(".game-btn");
gameButtons.forEach((button) => {
    button.addEventListener("click", playRound); // not possible to pass arguments to the function
})

const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", resetScore);

//======================= functions =======================

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
    return choice;
}

function playRound(callback) {

    const computerChoice = getComputerChoice();
    const playerChoice = callback.target.id;
    const str = `[COMPUTER] ${computerChoice} - ${playerChoice} [YOU]`;
    roundChoices.textContent = str;

    // tie cases
    if (playerChoice == computerChoice) {
        roundResults.textContent = "It is a tie!"
        return;
    } 

    // win cases for the user
    else if (playerChoice == "rock" && computerChoice == "scissors" ||
            playerChoice == "paper" && computerChoice == "rock" ||
            playerChoice == "scissors" && computerChoice == "paper") {
            roundResults.textContent = "You won!";
            globalPlayerScore++;
            playerScore.textContent = globalPlayerScore;
    }
    
    // lose cases for the user
    else {
        roundResults.textContent = "You lost :(";
        globalComputerScore++;
        computerScore.textContent = globalComputerScore; 
    }

}

function resetScore() {
    globalPlayerScore = 0;
    globalComputerScore = 0;
    playerScore.textContent = globalPlayerScore;
    computerScore.textContent = globalComputerScore;
    roundChoices.textContent = "";
    roundResults.textContent = "";
}
