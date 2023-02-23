const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const addTimeButton = document.querySelector(".add-time");
const reduceTimeButton = document.querySelector(".reduce-time");
const forestSoundButton = document.querySelector(".sound-forest");
const rainySoundButton = document.querySelector(".sound-rainy");
const cafeSoundButton = document.querySelector(".sound-cafe");
const fireSoundButton = document.querySelector(".sound-fire");
const darkModeButton = document.querySelector(".dark-mode");
const lightModeButton = document.querySelector(".light-mode");
const forestInputRange = document.querySelector(".sound-forest input");
const rainyInputRange = document.querySelector(".sound-rainy input");
const cafeInputRange = document.querySelector(".sound-cafe input");
const fireInputRange = document.querySelector(".sound-fire input");

const forestSound = new Audio("assets/audios/floresta.wav");
const rainySound = new Audio("assets/audios/Chuva.wav");
const cafeSound = new Audio("assets/audios/Cafeteria.wav");
const fireSound = new Audio(" assets/audios/Lareira.wav");

export {
  secondsDisplay,
  minutesDisplay,
  playButton,
  stopButton,
  pauseButton,
  addTimeButton,
  reduceTimeButton,
  forestSoundButton,
  rainySoundButton,
  cafeSoundButton,
  fireSoundButton,
  darkModeButton,
  lightModeButton,
  forestInputRange,
  rainyInputRange,
  cafeInputRange,
  fireInputRange,
  forestSound,
  rainySound,
  cafeSound,
  fireSound,
};
