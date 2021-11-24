function computerPlay() {
    let rnd = Math.floor(Math.random() * 3);
    switch (rnd) {
        case 0:
            return 'Rock';

        case 1:
            return 'Paper';

        case 2:
            return 'Scissors';
    };
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            return 0;
        } else if (computerSelection === 'Paper') {
            return -1;
        } else {
            return 1;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return 1;
        } else if (computerSelection === 'Paper') {
            return 0;
        } else {
            return -1;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return -1;
        } else if (computerSelection === 'Paper') {
            return 1;
        } else {
            return 0;
        }
    } else {
        // playerSelection invalid!
        return null;
    }
}

function printRoundResult(playerSelection, computerSelection, score) {
    if (score === 0) {
        console.log(`It's a tie! You both choosed ${playerSelection}`);
    } else if (score === 1) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function printGameResult(score) {
    if (score > 0) {
        console.log('You win the game!');
    } else if (score < 0) {
        console.log('You lose the game!');
    } else {
        console.log("It's a tie");
    }
}

function game() {
    let playerScore = 0;

    for (let i = 0; i < 5; ++i) {
        let playerSelection = prompt(`[${i+1} / 5] Rock Paper Scissors ?`);
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();

        let computerSelection = computerPlay();
        let score = playRound(playerSelection, computerSelection);

        if (score === null) {
            console.log('Error: playerSelection invalid!');
            --i;
        } else {
            playerScore += score;
            printRoundResult(playerSelection, computerSelection, score);
        }
    }

    printGameResult(playerScore);
}

game();