const p1 = {
    score: 0,
    button: document.querySelector('#button1'),
    play: document.querySelector('#play1'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#button2'),
    play: document.querySelector('#play2'),
}

const resetButton = document.querySelector('#reset')
const selectWinScore = document.querySelector('#playTo');
let winScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.play.classList.add('winner');
            opponent.play.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.play.textContent = player.score;
    }
}

p1.button.addEventListener('click', function() {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', function() {
    updateScore(p2, p1);
});

resetButton.addEventListener('click', reset);

selectWinScore.addEventListener('change', function(e) {
    winScore = parseInt(this.value);
    reset();
});

function reset() {
    isGameOver = false;
    for (let p of[p1, p2]) {
        p.score = 0;
        p.play.textContent = 0;
        p.button.disabled = false;
    }
    p1.play.classList.remove('winner', 'loser');
    p2.play.classList.remove('loser', 'winner');
}