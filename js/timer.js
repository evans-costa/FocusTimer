import Sounds from "./sounds.js";
import { playButton, pauseButton } from "./elements.js";

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeout;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function play() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        reset();
        Sounds().stopAllSounds();
        pauseButton.classList.add("hide");
        playButton.classList.remove("hide");
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, seconds - 1);

      play();
    }, 1000);
  }

  function pause() {
    clearTimeout(timerTimeout);
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeout);
  }

  function addFiveMinutes() {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateDisplay(minutes + 5, seconds);
  }

  function reduceFiveMinutes() {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (minutes <= 5) {
      updateDisplay(minutes - minutes, seconds);
      return;
    }

    updateDisplay(minutes - 5, seconds);
  }

  return {
    play,
    pause,
    reset,
    addFiveMinutes,
    reduceFiveMinutes,
    updateDisplay,
  };
}
