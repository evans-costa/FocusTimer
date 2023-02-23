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
  lightModeButton,
  darkModeButton,
  forestInputRange,
  fireInputRange,
  rainyInputRange,
  cafeInputRange,
  forestSound,
  rainySound,
  cafeSound,
  fireSound,
} from "./elements.js";

export default function Events({ timer, timerControls, sounds, setVolume, colorModes }) {
  playButton.addEventListener("click", function () {
    timerControls.playTimer();
    timer.play();
  });

  pauseButton.addEventListener("click", function () {
    timerControls.pauseTimer();
    timer.pause();
  });

  stopButton.addEventListener("click", function () {
    timerControls.stopTimer();
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
    setVolume.setDefault(forestSound, forestInputRange);
  });

  rainySoundButton.addEventListener("click", function () {
    sounds.playRainySound();
    setVolume.setDefault(rainySound, rainyInputRange);
  });

  cafeSoundButton.addEventListener("click", function () {
    sounds.playCafeSound();
    setVolume.setDefault(cafeSound, cafeInputRange);
  });

  fireSoundButton.addEventListener("click", function () {
    sounds.playFireSound();
    setVolume.setDefault(fireSound, fireInputRange);
  });

  lightModeButton.addEventListener("click", function () {
    colorModes.changeToDarkMode();
  });

  darkModeButton.addEventListener("click", function () {
    colorModes.changeToLightMode();
  });

  forestInputRange.addEventListener("change", function () {
    setVolume.setForest();
  });

  rainyInputRange.addEventListener("change", function () {
    setVolume.setRainy();
  });

  cafeInputRange.addEventListener("change", function () {
    setVolume.setCafe();
  });

  fireInputRange.addEventListener("change", function () {
    setVolume.setFire();
  });
}
