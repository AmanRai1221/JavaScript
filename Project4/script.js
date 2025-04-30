let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Plese enter a valid number")
    }
    else if(guess < 1 || guess > 100){
        alert("Plese enter a number between 1 and 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayMessage(`Game Over!. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed right!');
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Last guess was too low!');
        lowOrHi.textContent = "Last guess was too low!"
    }
    else if(guess > randomNumber){
        displayMessage('Last guess was too high!');
        lowOrHi.textContent = "Last guess was too high!"
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2>Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newButton = document.querySelector('#newGame');
    newGame.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
