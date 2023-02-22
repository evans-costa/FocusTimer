import Timer from "./timer.js";
import Controls from "./controls.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import { secondsDisplay, minutesDisplay, playButton, pauseButton } from "./elements.js";

const timer = Timer({
  secondsDisplay,
  minutesDisplay,
});

const controls = Controls({
  playButton,
  pauseButton,
});

const sounds = Sounds();

Events({
  timer,
  controls,
  sounds,
});
