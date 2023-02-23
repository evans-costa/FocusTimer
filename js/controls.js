export default function TimerControls({ pauseButton, playButton }) {
  function playTimer() {
    pauseButton.classList.remove("hide");
    playButton.classList.add("hide");
  }

  function pauseTimer() {
    pauseButton.classList.add("hide");
    playButton.classList.remove("hide");
  }

  function stopTimer() {
    pauseButton.classList.add("hide");
    playButton.classList.remove("hide");
  }

  return {
    playTimer,
    pauseTimer,
    stopTimer,
  };
}
