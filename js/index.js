import Timer from "./timer.js";
import TimerControls from "./controls.js";
import Sounds from "./sounds.js";
import SetVolume from "./volume.js";
import Events from "./events.js";
import ColorModes from "./colorModes.js";

import {
  secondsDisplay,
  minutesDisplay,
  playButton,
  pauseButton,
  darkModeButton,
  lightModeButton,
  forestInputRange,
  rainyInputRange,
  cafeInputRange,
  fireInputRange,
} from "./elements.js";

const timer = Timer({
  secondsDisplay,
  minutesDisplay,
});

const timerControls = TimerControls({
  playButton,
  pauseButton,
});

const sounds = Sounds();

const setVolume = SetVolume({
  forestInputRange,
  rainyInputRange,
  cafeInputRange,
  fireInputRange,
});

const colorModes = ColorModes({
  darkModeButton,
  lightModeButton,
});

Events({
  timer,
  timerControls,
  sounds,
  setVolume,
  colorModes,
});
