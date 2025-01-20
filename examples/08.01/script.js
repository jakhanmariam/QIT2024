const cards = document.querySelectorAll('.card');
const startButton = document.getElementById('startButton');
const timerElement = document.getElementById('timer')
const result = document.getElementById('result');
const resetButton = document.getElementById('resetButton')


let flippedCards = []
let guessCards = 0
let isStarted = false;
let timerEnterval;
let seconds = 0


resetButton.addEventListener('click', (e) => {
    flippedCards = []
    guessCards = 0
    cards.forEach(card => {
        card.classList.remove('flipped')
    })
    seconds = 0
    timerElement.textContent = "Time: 0 seconds"
    result.textContent = "result"
    shuffleCards
})

startButton.addEventListener('click', () => {
    isStarted = true;
    startTimer()
});

function startTimer() {
    timerEnterval = setInterval (() => {
        seconds++;
        timerElement.textContent = "Time: " + seconds + " seconds"
    }, 1000)
}

function stopTimer() {
    clearInterval(timerEnterval);
    result.textContent = "Game over! You finished in " + seconds + " seconds!"
}

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        if(isStarted==false)  {
            return;
        }
        if(flippedCards.lengthn >= 2) {
            return;
        } else {
            card.classList.add('flipped')
            flippedCards.push(card)
        }
        if(flippedCards.length == 2) [
            checkForMatch()
        ]
    })
})


function checkForMatch() {  
    const[card1, card2] = flippedCards
    const img1 = card1.querySelector('.back-view img').src
    const img2 = card2.querySelector('.back-view img').src

    if(img1 == img2) {
        flippedCards = []
        guessCards++;
    } else {
        setTimeout(() => {
            flippedCards = []
        card1.classList.remove('flipped')
        card2.classList.remove('flipped')
        flippedCards = []
        }, 500);
    }

    if(guessCards==8) {
        stopTimer()
    }
}




