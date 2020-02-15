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

function renderScores() {
    const playerScoreElement = document.getElementById('playerScore');
    playerScoreElement.innerHTML = playerScore;
    
    const computerScoreElement = document.getElementById('computerScore');
    computerScoreElement.innerHTML = computerScore;
}

function reset() {
    playerScore = computerScore = 0;
    
    renderScores();
    const roundMessage = document.getElementById('round-message');
    roundMessage.innerHTML = '';

    const winMessage = document.getElementById('match-message');
    winMessage.innerHTML = ''
}

function game(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const winner = playRound(playerSelection, computerSelection);

    const roundMessage = document.getElementById('round-message');
    roundMessage.innerHTML='';
    
    if (winner > 0) {
        playerScore++;
        roundMessage.innerHTML=`You chose ${playerSelection} and computer chose ${computerSelection}. You won.`
    }
    else if (winner < 0) {
        roundMessage.innerHTML = `You chose ${playerSelection} and computer chose ${computerSelection}. You lose.`
        computerScore++;
    }
    else {
        roundMessage.innerHTML = `You chose ${playerSelection} and computer also chose ${computerSelection}. The round is drawn.`;
    }
    
    renderScores();
    
    const winMessage = document.getElementById('match-message');

    if (playerScore >= 5)
        winMessage.innerHTML = `You win! Score: ${playerScore} : ${computerScore}`;
    else if (computerScore >= 5)
        winMessage.innerHTML = `You lose! Score: ${computerScore} : ${playerScore}`;

    if(playerScore >= 5 || computerScore >= 5) {
        setTimeout(reset, 5000);
        const message = document.getElementById('match-message');
        message.innerHTML = `${message.innerHTML}. \nThe match will reset in 5 seconds...`;
    }
}