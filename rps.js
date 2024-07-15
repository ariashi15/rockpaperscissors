function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    if (rand === 0) {
        return "rock";
    } else if (rand === 1) {
        return "paper";
    } else if (rand === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors").toLowerCase(); // case insensitive

    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        alert("Invalid choice; please choose rock, paper, or scissors");
    } else {
        return choice;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        console.log("You chose: " + humanChoice + "\nThe computer chose: " + computerChoice);
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("You tied! Both of you chose rock.");
            } else if (computerChoice === "paper") {
                console.log("You lost! Paper beats rock.");
                computerScore += 1;
            } else if (computerChoice === "scissors") {
                console.log("You won! Rock beats scissors.");
                humanScore += 1;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You won! Paper beats rock.");
                humanScore += 1;
            } else if (computerChoice === "paper") {
                console.log("You tied! Both of you chose paper.");
            } else if (computerChoice === "scissors") {
                console.log("You lost! Scissors beats paper.");
                computerScore += 1;
            }        
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lost! Rock beats scissors.");
                computerScore += 1;
            } else if (computerChoice === "paper") {
                console.log("You won! Scissors beats paper.");
                humanScore += 1;
            } else if (computerChoice === "scissors") {
                console.log("You tied! Both of you chose scissors.");
            }               
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Final Scores \nYou: " + humanScore + "\nComputer: " + computerScore);
}