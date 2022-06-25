function computerSelection() {
    // make a random number generator form 1 to 3
    // if 1 then its Rock 
    // if 2 then its Paper
    // if 3 then its Scissors
    const num = Math.floor(Math.random() * 3) + 1;

    if(num === 1)
        return 'ROCK';
    else if(num === 2)
        return 'PAPER';
    else
        return 'SCISSOR';
}


    // will return a string of Rock , Paper or Scissor

function playerSelection() {
    
    const input_txt = prompt('Enter Rock-Paper-Scissor');
    return input_txt.toUpperCase();
}

let playerScore = 0;
let computerScore  = 0;

function playRound() {

    const computerChoice = computerSelection();
    const playerChoice = playerSelection();

    
    if(playerChoice === computerChoice)
    {
        console.log(`${playerChoice} and ${computerChoice} makes a draw`);
    }
    else if(playerChoice === 'ROCK' && computerChoice === 'PAPER')
    {
        console.log(`You lose ${computerChoice} beats ${playerChoice}`);
        computerScore++;
    }
    else if(playerChoice === 'SCISSOR' && computerChoice === 'ROCK')
    {
        console.log(`you lose ${computerChoice} beats ${playerChoice}`);
        computerScore++;
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'SCISSOR')
    {
        console.log(`you lose ${computerChoice} beats ${playerChoice}`);
        computerScore++;
    }
    else
    {
        console.log(`You Win ${playerChoice} beats ${computerChoice}`);
        playerScore++;
    }

    
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound();
        
    console.log(`player score : ${playerScore} & computer score : ${computerScore}`);
    
    if(playerScore >= 3)
        {
            console.log("You won");
            break;
        }
    else if(computerScore >= 3)
        {
            console.log("You lost");
            break;
        }
    else if(playerScore === computerScore && i > 2)
        {
            console.log("Its a draw");
            break;
        }
    }

    if (playerScore > computerScore) {
        console.log("You Won");
    }
    else
    {
        console.log("You Lose");
    }

}
