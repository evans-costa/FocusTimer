import { forestSound, rainySound, cafeSound, fireSound } from "./elements.js";

export default function Sounds() {
  function pauseSounds(soundOne, soundTwo, soundThree) {
    soundOne.pause();
    soundTwo.pause();
    soundThree.pause();
  }

  function playForestSound() {
    pauseSounds(rainySound, cafeSound, fireSound);
    forestSound.play();
    forestSound.loop = true;
  }

  function playRainySound() {
    pauseSounds(forestSound, cafeSound, fireSound);
    rainySound.play();
    rainySound.loop = true;
  }

  function playCafeSound() {
    pauseSounds(rainySound, forestSound, fireSound);
    cafeSound.play();
    cafeSound.loop = true;
  }

  function playFireSound() {
    pauseSounds(rainySound, cafeSound, forestSound);
    fireSound.play();
    fireSound.loop = true;
  }

  function stopAllSounds() {
    fireSound.pause();
    cafeSound.pause();
    rainySound.pause();
    forestSound.pause();
  }

  return {
    playForestSound,
    playFireSound,
    playRainySound,
    playCafeSound,
    stopAllSounds,
  };
}
