const pageBackground = document.querySelector(".container");
const changeColorButton = document.querySelector(".button");
const changeColorName = document.querySelector(".color");

changeColorButton.addEventListener("click", function () {
  if (pageBackground.classList.contains("container")) {
      pageBackground.classList.replace("container", "container2");
      changeColorName.textContent = "darkblue";
  } else {
      pageBackground.classList.replace("container2", "container");
      changeColorName.textContent = "Red";
  }
});