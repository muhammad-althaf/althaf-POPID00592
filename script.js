let startTime = 0;
let interval;
let isRunning = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        startStopButton.textContent = 'Start';
    } else {
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateDisplay, 10);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    startTime = 0;
    isRunning = false;
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor(currentTime % 1000);

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    display.textContent = formattedTime;
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
