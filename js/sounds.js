export default function Sounds() {
  const forestSound = new Audio("assets/audios/floresta.wav");
  const rainySound = new Audio("assets/audios/Chuva.wav");
  const cafeSound = new Audio("assets/audios/Cafeteria.wav");
  const fireSound = new Audio(" assets/audios/Lareira.wav");

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
