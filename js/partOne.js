const pageBackground = document.querySelector(".container");
const changeColorButton = document.querySelector(".button");
const changeColorName = document.querySelector(".color");

changeColorButton.addEventListener("click", function () {
    pageBackground.classList.replace("container", "container2");
    changeColorName.textContent = "darkblue";
});