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
  fireSound,
  cafeSound,
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
    colorModes.removeAllPreviousSelectedElements();
  });

  addTimeButton.addEventListener("click", function () {
    timer.addFiveMinutes();
  });

  reduceTimeButton.addEventListener("click", function () {
    timer.reduceFiveMinutes();
  });

  forestSoundButton.addEventListener("click", function (event) {
    if (event.target.type != "range") {
      sounds.playForestSound();
      setVolume.setDefault(forestSound, forestInputRange);
      colorModes.removeAllPreviousSelectedElements();
      colorModes.selectElement(this);
    }
  });

  rainySoundButton.addEventListener("click", function (event) {
    if (event.target.type != "range") {
      sounds.playRainySound();
      setVolume.setDefault(rainySound, rainyInputRange);
      colorModes.removeAllPreviousSelectedElements();
      colorModes.selectElement(this);
    }
  });

  cafeSoundButton.addEventListener("click", function (event) {
    if (event.target.type != "range") {
      sounds.playCafeSound();
      setVolume.setDefault(cafeSound, cafeInputRange);
      colorModes.removeAllPreviousSelectedElements();
      colorModes.selectElement(this);
    }
  });

  fireSoundButton.addEventListener("click", function (event) {
    if (event.target.type != "range") {
      sounds.playFireSound();
      setVolume.setDefault(fireSound, fireInputRange);
      colorModes.removeAllPreviousSelectedElements();
      colorModes.selectElement(this);
    }
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
