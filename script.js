let rnumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;

/*match the user guess with generated number*/

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = "First Input a Number...";
        document.querySelector('body').style.backgroundColor = "red";
    }
    else if (guess < rnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too Low👇 Try Again!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "You Lost☹️ Start New Game!";
        }
    }
    else if (guess > rnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too High👆 Try Again!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "You Lost☹️ Start New Game!";
        }
    }
    else if (guess === rnumber) {
        document.querySelector('.message').textContent = "Congratulations🎊 You Won!!"
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').textContent = rnumber;
        document.querySelector('.number').style.width = "20rem";
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
})

/*reset the canvas for a new game*/

document.querySelector('.again').addEventListener('click', function () {
    score = 30;
    rnumber = Math.trunc(Math.random() * 30) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";
})