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
