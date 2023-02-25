export default function ColorModes({ darkModeButton, lightModeButton }) {
  let getElementsToChange;
  let getAllCardSounds = document.querySelectorAll(".card");

  function changeToDarkMode() {
    getElementsToChange = document.querySelectorAll(".light");

    darkModeButton.classList.remove("hide");
    lightModeButton.classList.add("hide");

    getElementsToChange.forEach((element) => {
      element.classList.remove("light");
      element.classList.add("dark");
    });
  }

  function changeToLightMode() {
    getElementsToChange = document.querySelectorAll(".dark");

    darkModeButton.classList.add("hide");
    lightModeButton.classList.remove("hide");

    getElementsToChange.forEach((element) => {
      element.classList.remove("dark");
      element.classList.add("light");
    });
  }

  function removeAllPreviousSelectedElements() {
    for (let i = 0; i < getAllCardSounds.length; i++) {
      let cardSound = getAllCardSounds[i];

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
