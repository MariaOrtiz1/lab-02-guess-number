import { compareGuess } from './utils.js';


const resetButtonDisplay = document.getElementById('resetButton');
const mushroomButtonDisplay = document.getElementById('playButton');
const feedbackDisplay = document.getElementById('feedback');
const remainingGuessesDisplay = document.getElementById('remainingGuesses');
const totalWinsDisplay = document.getElementById('totalWins');
const totalPlaysDisplay = document.getElementById('totalPlays');
const guessBoxInput = document.getElementById('guessBox'); 


let totalWins = 0;
let totalPlays = 0;
let remainingGuesses = 5;
let targetNumber = Math.ceil(Math.random() * 20);

mushroomButtonDisplay.addEventListener('click', () => {
    if (compareGuess(Number(guessBoxInput.value) , Number(targetNumber)) === -1) {
        remainingGuesses--;
        feedbackDisplay.textContent = 'Too low silly, hehehe!';
        remainingGuessesDisplay.textContent = `You have ${remainingGuesses} tries left! Hehehe!`;
    }

    else if (compareGuess(Number(guessBoxInput.value) , Number(targetNumber)) === 0) {
        feedbackDisplay.textContent = 'Hehehe you won!';
        totalWins++;
        totalPlays++;
        totalPlaysDisplay.textContent = `You have played ${totalPlays} times! You're so fun to play with, hehehe!`;
        totalWinsDisplay.textContent = `You have won ${totalWins} times! Let's play again!`;
        resetButtonDisplay.classList.toggle('hiding');

    }
    else if (compareGuess(Number(guessBoxInput.value) , Number(targetNumber)) === +1) {
        remainingGuesses--;
        feedbackDisplay.textContent = 'Too hight silly, hehehe!';
        remainingGuessesDisplay.textContent = `You have ${remainingGuesses} tries left! Hehehe!`;
    }

    if (remainingGuesses === 0) {
        feedbackDisplay.textContent = 'We stole your name! You can play again to win it back! Hehehe!';
        resetButtonDisplay.classList.toggle('hiding');
    }

});

resetButtonDisplay.addEventListener('click', () => {
    remainingGuesses = 5;
    targetNumber = Math.ceil(Math.random() * 20);
    remainingGuessesDisplay.textContent = `You want to play again? Hehehe, you get ${remainingGuesses} more tries!`
    resetButtonDisplay.classList.toggle('hiding');
}
)