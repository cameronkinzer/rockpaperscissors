function game(choice) {
    var computer = computerChoice();
    if (choice == computer) {
        return 'Tie';
    } else if (choice == 'rock') {
        if (computer == 'paper') {
            return 'Computer chose paper, computer wins';
        } else { return 'Player wins' }
    } else if (choice == 'paper') {
        if (computer == 'scissors') {
            return 'Computer chose scissors, computer wins';
        } else { return 'Player wins' }
    } else if (choice == 'scissors') {
        if (computer == 'rock') {
            return 'Computer chose Rock, computer wins';
        } else { return 'Player Wins' }
    };

    function computerChoice() {
        var computerChoice = Math.random();
        if (computerChoice <= .33) {
            return 'rock';
        } else if ((computerChoice > .33) && (computerChoice <= .66)) {
            return 'paper';
        } else if (computerChoice => .67) {
            return 'scissors';
        }
    }
};

function drawResult(result) {
    document.getElementById('result').innerHTML = result
}

function play(choice) {
    drawResult(game(choice))
}










