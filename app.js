"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);

  detectUserPreference();
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  const selectedColorMode = this.value;
  // console.log(selectedColorMode);
  // console.log("New color mode selected");
  changeMode(selectedColorMode);
  // gør ikke andet end at hive værdien ud af select dvs give parm mode en værdi
  saveUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  resetColorMode();
  //   console.log("mode change");

  if (mode == "dark") {
    document.body.classList.add("dark-mode");
  } else if (mode == "green") {
    document.body.classList.add("green-mode");
  } else if (mode == "yellow") {
    document.body.classList.add("yellow-mode");
  }
}

function resetColorMode() {
  document.body.classList.remove("dark-mode", "green-mode", "yellow-mode");
}

function saveUserColorMode(mode) {
  localStorage.setItem("userColorMode", mode);
}

function readUserColorMode() {
  const userColorMode = localStorage.getItem("userColorMode");
  console.log(userColorMode);
  return userColorMode;
}

function detectUserPreference() {
  const modeFromLocalStorage = readUserColorMode();
  // sætter teksten i boksen til den gemte farver når reloader

  console.log(modeFromLocalStorage);
  //kun hvis vi har en værdi i modeFromLocalStorage vises den. dvs forhindrer at inden værid giver null.
  if (modeFromLocalStorage) {
    changeMode(modeFromLocalStorage);
    document.querySelector("#select-color-mode").value = modeFromLocalStorage;
  }
}
