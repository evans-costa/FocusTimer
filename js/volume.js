import { forestSound, rainySound, cafeSound, fireSound } from "./elements.js";

export default function SetVolume({ forestInputRange, rainyInputRange, cafeInputRange, fireInputRange }) {
  function setForest() {
    forestSound.volume = forestInputRange.value / 100;
  }

  function setRainy() {
    rainySound.volume = rainyInputRange.value / 100;
  }

  function setCafe() {
    cafeSound.volume = cafeInputRange.value / 100;
  }

  function setFire() {
    fireSound.volume = fireInputRange.value / 100;
  }

  function setDefault(sound, inputSound) {
    inputSound.value = 50;
    sound.volume = inputSound.value / 100;
  }

  return {
    setForest,
    setRainy,
    setCafe,
    setFire,
    setDefault,
  };
}
