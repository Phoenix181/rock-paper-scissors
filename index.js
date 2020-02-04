const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', playerSelection);
});

let playerScore = 0, 
    computerScore = 0;

const playerScoreElement = document.getElementById('playerScore');
playerScoreElement.innerHTML = playerScore;

const computerScoreElement = document.getElementById('computerScore');
computerScoreElement.innerHTML = computerScore;

function playerSelection(e) {
    game(e);
}

function computerPlay() {
    const selections = ['rock', 'paper', 'scissors'];
    const selction = Math.round(Math.random() * 3);
    return selections[selction];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'scissors':
                    return 1;
                case 'paper':
                    return -1;
                case 'rock':
                    return 0;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'scissors':
                    return -1;
                case 'paper':
                    return 0;
                case 'rock':
                    return 1;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'scissors':
                    return 0;
                case 'paper':
                    return 1;
                case 'rock':
                    return -1;
            }
            break;
    }
}


function game(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const winner = playRound(playerSelection, computerSelection);

    const winMessage = document.getElementById('message');
    winMessage.innerHTML='';

    if (winner > 0)
        playerScore++;
    else if (winner < 0)
        computerScore++;
    else {
        winMessage.innerHTML='The round is drawn';
    }

    const playerScoreElement = document.getElementById('playerScore');
    playerScoreElement.innerHTML = playerScore;

    const computerScoreElement = document.getElementById('computerScore');
    computerScoreElement.innerHTML = computerScore;

    if (playerScore >= 5)
        winMessage.innerHTML = `You win! Score: ${playerScore} : ${computerScore}`;
    else if (computerScore >= 5)
        winMessage.innerHTML = `You lose! Score: ${computerScore} : ${playerScore}`;
}