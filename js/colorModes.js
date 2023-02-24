export default function ColorModes({ darkModeButton, lightModeButton }) {
  let selectLightElements = document.querySelectorAll(".light");
  let selectAllCardSounds = document.querySelectorAll("div > button");

  function changeToDarkMode() {
    darkModeButton.classList.remove("hide");
    lightModeButton.classList.add("hide");

    selectLightElements.forEach((element) => {
      element.classList.remove("light");
      element.classList.add("dark");
    });
  }

  function changeToLightMode() {
    darkModeButton.classList.add("hide");
    lightModeButton.classList.remove("hide");

    selectLightElements.forEach((element) => {
      element.classList.remove("dark");
      element.classList.add("light");
    });
  }

  function removeAllPreviousSelectedElements() {
    for (let i = 0; i < selectAllCardSounds.length; i++) {
      let cardSound = selectAllCardSounds[i];

      if (cardSound.classList.contains("selected")) {
        cardSound.classList.remove("selected");
        cardSound.classList.add("off");
      }
    }
  }

  function selectElement(element) {
    element.classList.remove("off");
    element.classList.add("selected");
  }

  return {
    changeToDarkMode,
    changeToLightMode,
    removeAllPreviousSelectedElements,
    selectElement,
  };
}
