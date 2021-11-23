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
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let win = null;
    let tie = false;

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            tie = true;
        } else if (computerSelection === 'Paper') {
            win = false;
        } else {
            win = true;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            win = true;
        } else if (computerSelection === 'Paper') {
            tie = true;
        } else {
            win = false;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            win = false;
        } else if (computerSelection === 'Paper') {
            win = true;
        } else {
            tie = true;
        }
    } else {
        return 'Error: playerSelection invalid!';
    }

    if (tie) {
        return `It's a tie! You both choosed ${playerSelection}`;
    } else if (win) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
