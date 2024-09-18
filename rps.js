document.addEventListener("DOMContentLoaded", () => {

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

    function playGame() {
        let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice, computerChoice) {
            console.log("You chose: " + humanChoice + "\nThe computer chose: " + computerChoice);
            if (humanChoice === "rock") {
                if (computerChoice === "rock") {
                    alert("You tied! Both of you chose rock.");
                } else if (computerChoice === "paper") {
                    alert("You lost! Paper beats rock.");
                    computerScore += 1;
                } else if (computerChoice === "scissors") {
                    alert("You won! Rock beats scissors.");
                    humanScore += 1;
                }
            } else if (humanChoice === "paper") {
                if (computerChoice === "rock") {
                    alert("You won! Paper beats rock.");
                    humanScore += 1;
                } else if (computerChoice === "paper") {
                    alert("You tied! Both of you chose paper.");
                } else if (computerChoice === "scissors") {
                    alert("You lost! Scissors beats paper.");
                    computerScore += 1;
                }        
            } else if (humanChoice === "scissors") {
                if (computerChoice === "rock") {
                    alert("You lost! Rock beats scissors.");
                    computerScore += 1;
                } else if (computerChoice === "paper") {
                    alert("You won! Scissors beats paper.");
                    humanScore += 1;
                } else if (computerChoice === "scissors") {
                    alert("You tied! Both of you chose scissors.");
                }               
            }

            const human = document.querySelector("#human-score");
            human.textContent = `Your score: ${humanScore}`;

            const comp = document.querySelector("#computer-score");
            comp.textContent = `Computer score: ${computerScore}`;

            if (humanScore === 5) {
                alert("You won the game!")
            } else if (computerScore === 5) {
                alert("You lost the game!")
            }
        }
        
        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                playRound(button.id, getComputerChoice());
            })
        })
    }

    playGame();
});