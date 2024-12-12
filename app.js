const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

const mins = document.querySelector(".minutes");
const secs = document.querySelector(".seconds");

let intervalId;
let timerTime=00;

stopButton.style.display = "none";

function startTimer() {
  intervalId= setInterval(incrementTimer, 1000);
  stopButton.style.display = "inline-block";
  startButton.style.display = "none";
}

function stopTimer() {
    clearInterval(intervalId);
    stopButton.style.display = "none";
    startButton.style.display = "inline-block";
}

function resetTimer() {
    stopTimer();
    secs.innerText= "00";
    mins.innerText= "00";
    timerTime=0;
}

function incrementTimer(){
    timerTime++;
    
    const numberofMins = Math.floor(timerTime/60);

    secs.innerText = zeroPadding(timerTime%60);
    mins.innerText = zeroPadding(numberofMins);
}

function zeroPadding(number){
    return number<10 ? `0${number}` : number;
}
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

