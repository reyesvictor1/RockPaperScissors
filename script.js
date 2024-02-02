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

function getPlayerChoice() {
    let userChoice = prompt("Enter your choice:");
    userChoice = userChoice.toLowerCase().trim();

    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")
        return userChoice;
    
    console.log("Unrecognized choice, try again");
    getPlayerChoice();
}

function playRound(playerChoice, computerChoice) {

    const choices = `[Computer choice] ${computerChoice} - ${playerChoice} [your choice]`;
    
    // tie cases
    if (playerChoice == computerChoice) {
        console.log(choices, "--> It's a tie")
        return 0;
    } 

    // win cases for the user
    else if (playerChoice == "rock" && computerChoice == "scissors" ||
            playerChoice == "paper" && computerChoice == "rock" ||
            playerChoice == "scissors" && computerChoice == "paper") {
        console.log(choices, "--> You won!")
        return 1;
    }
    
    // lose cases for the user
    console.log(choices, "--> You lost :(")
    return 2;
}

function playGame() {

    const TOTAL_ROUNDS = 5;
    let computerScore = 0;
    let playerScore = 0;

    console.log("ROCK PAPER SCISSORS!")

    for (let idx = 0; idx < TOTAL_ROUNDS; idx++) {

        console.log(`ROUND ${idx + 1}`)

        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();

        let winner = playRound(computerChoice, playerChoice);

        if (winner === 1) playerScore++;
        else if (winner === 2) computerScore++;

        console.log(`SCORE: [Computer] ${computerScore} - ${playerScore} [You]`)
    }

    if (playerScore == computerScore) console.log("IT'S A TIE");
    else if (playerScore > computerScore) console.log("YOU WON!");
    else console.log("YOU LOST :(");
    
}


console.log(playGame());

