const startButton = document.querySelector("#start-stop-button");

const resetButton = document.querySelector("#reset-button");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerInterval = null;
let timerStatus = "stopped";

startButton.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopwatch, 1000);
    document.getElementById(
      "start-stop-button"
    ).innerHTML = `<i class ="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "start-stop-button"
    ).innerHTML = `<i class ="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetButton.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerText = "00:00:00";

  if (timerStatus === "started") {
    document.getElementById(
      "start-stop-button"
    ).innerHTML = `<i class ="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

function stopwatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours += 1;
  }

  document.getElementById("timer").innerText =
    padTwo(hours.toString()) +
    ":" +
    padTwo(minutes.toString()) +
    ":" +
    padTwo(seconds.toString());
}

function padTwo(str) {
  return str.length === 2 ? str : "0" + str;
}
