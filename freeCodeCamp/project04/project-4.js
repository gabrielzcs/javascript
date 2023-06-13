//VARIABLES FOR TIME VALUES

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer");
let int = null;

//EVENT LISTNERS

document.getElementById("play").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;
  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
//STOP WATCH FUNCTION

// function stopWatch() {
//   sec++;

//   if (sec / 60 === 1) {
//     sec = 0;
//     min++;

//     if (min / 60 === 1) {
//       min = 0;
//       hour++;
//     }
//   }
//   let displayTimer = document.getElementById("timer");
//   displayTimer.innerHTML = hour + ":" + min + ":" + sec;
// }

// resertBtn.addEventListener("click", function () {
//   window.clearInterval(timerInterval);
//   sec = 0;
//   min = 0;
//   hour = 0;

//   document.getElementById("timer").innerHTML = "00:00:00";
// });
