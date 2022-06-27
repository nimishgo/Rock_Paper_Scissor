const currents = document.querySelector('.currents');
const playerLedger = document.querySelector('.playerScore');
const computerLedger = document.querySelector('.computerScore');
const compScore = document.querySelector('.computerPoints');
const playScore = document.querySelector('.playerPoints');
const result = document.querySelector('.Result');
const container1 = document.querySelector('.container1');

let playerChoice;
let computerChoice;
let computerPoints = 0;
let playerPoints = 0;

function computerSelection() {
    // make a random number generator form 1 to 3
    // if 1 then its Rock 
    // if 2 then its Paper
    // if 3 then its Scissors
    const num = Math.floor(Math.random() * 3) + 1;
    
    if(num === 1)
        computerChoice = `ROCK`;
    else if(num === 2)
        computerChoice = "PAPER";
    else
        computerChoice = "SCISSOR";
}
// will return a string of Rock , Paper or Scissor
const btn = document.querySelectorAll('button');

btn.forEach( e => {
    e.addEventListener('click', (el) => {
            playerChoice = el.target.alt;
            // console.log(playerChoice);
            currents.textContent = playerChoice;
            computerSelection();
            playerLedger.textContent = computerChoice;
            gameLogic(playerChoice,computerChoice);
            if(computerPoints === 5 || playerPoints === 5) {
                el.stopPropagation();
                btn[0].disabled = true;
                btn[1].disabled = true;
                btn[2].disabled = true;
            }
         })
});


function gameLogic(playerChoice,computerChoice) {
    if(playerChoice === computerChoice)
    {
        result.textContent = "Its a tie";
        playerPoints++;
        playScore.textContent = playerPoints;

    }
    else if(playerChoice === 'ROCK' && computerChoice === 'SCISSOR')
    {
        result.textContent = `Rock beats Scissor`;
        playerPoints++;
        playScore.textContent = playerPoints;
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'ROCK')
    {
        result.textContent = `Paper beats rock`;
        playerPoints++;
        playScore.textContent = playerPoints;
    }
    else if(playerChoice === 'SCISSOR' && computerChoice === 'PAPER')
    {
        result.textContent = `Scissor beats paper`;
        playerPoints++;
        playScore.textContent = playerPoints;
    }
    else
    {
        computerPoints++;
        result.textContent = `${computerChoice} beats ${playerChoice}`;
        compScore.textContent = computerPoints;
    }

    if(computerPoints >= 5)
    {
        result.textContent = `Computer Won`;
        result.className = 'won';
        const reset = document.createElement('button');
        reset.innerHTML = 'RESET';
        reset.className = `reset_button`;
        container1.appendChild(reset);
        reset.addEventListener('click', () => {
            location.reload();
        });        
    }
    else if(playerPoints >= 5)
    {
        result.textContent = `Player Won`;
        result.className = 'won';
        const reset = document.createElement('button');
        reset.innerHTML = 'RESET';
        reset.className = `reset_button`;
        container1.appendChild(reset);
        reset.addEventListener('click', (e) => {
            location.reload();
        });
    }

}
