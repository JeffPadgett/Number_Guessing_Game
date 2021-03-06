/*
GAME FUNCTION:
    -Player must guess a number between a min and max
    -Player gets a certain amount of guesses
    -Notify player of guesses remaining
    -Notify the player of the correct answer if loose
    -Let player choose to play again
*/

//Game Values
let min = 1;
let max = 10;       
let winningNum = 2;
let guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(guess > max || guess < min || isNaN(guess)){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'green';
        // Set message
        setMessage(`${winningNum} is correct! YOU WIN!!!`, 'green');
    } else {
        //Wrong number
        guessesLeft --;
        setMessage(`Try again! Guesses left ${guessesLeft}`)
        if(guessesLeft <= 0){
        guessInput.disabled = true;
        guessInput.style.borderColor = 'red';
        setMessage(`Out of chances! The number was ${winningNum}. Try Again!`)

        }
        
    }

});

// Set Message 

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

