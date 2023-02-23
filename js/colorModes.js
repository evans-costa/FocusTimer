export default function ColorModes({ darkModeButton, lightModeButton }) {
  let selectLightElements = document.querySelectorAll(".light");

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

  return {
    changeToDarkMode,
    changeToLightMode,
  };
}
