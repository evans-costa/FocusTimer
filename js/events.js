import {
  playButton,
  pauseButton,
  stopButton,
  addTimeButton,
  reduceTimeButton,
  forestSoundButton,
  rainySoundButton,
  cafeSoundButton,
  fireSoundButton,
} from "./elements.js";

export default function Events({ timer, controls, sounds }) {
  playButton.addEventListener("click", function () {
    controls.playTimer();
    timer.play();
  });

  pauseButton.addEventListener("click", function () {
    controls.pauseTimer();
    timer.pause();
  });

  stopButton.addEventListener("click", function () {
    controls.stopTimer();
    timer.reset();
    sounds.stopAllSounds();
  });

  addTimeButton.addEventListener("click", function () {
    timer.addFiveMinutes();
  });

  reduceTimeButton.addEventListener("click", function () {
    timer.reduceFiveMinutes();
  });

  forestSoundButton.addEventListener("click", function () {
    sounds.playForestSound();
  });

  rainySoundButton.addEventListener("click", function () {
    sounds.playRainySound();
  });

  cafeSoundButton.addEventListener("click", function () {
    sounds.playCafeSound();
  });

  fireSoundButton.addEventListener("click", function () {
    sounds.playFireSound();
  });
}
