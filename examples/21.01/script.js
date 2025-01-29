const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');




let seconds = 0;
let timerEnterval;



startButton.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
        startButton.textContent = 'stop';
    } else {
        stopTimer();
        startButton.textContent = 'reset';
    }
});




function resetTimer() {
    stopTimer();
    time = 0;
    displayTime();
    startButton.textContent = 'start'
}


function resetTimer() {
    isRunning = false;
    clearInterval(timer);
}



resetButton.addEventListener('click', resetTimer)


function startTimer() {
    isRunning = true;
    timer = setInterval(() => {
        time++;
        displayTime();
    }, 1000);
}


function displayTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60; 
    timeDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}



function padZero(number) {
    return number < 10 ? `0 ${number}` : number;
}

