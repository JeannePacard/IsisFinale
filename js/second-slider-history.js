const allWomens = document.querySelectorAll(".femmes-button");

const mainImage = document.querySelectorAll(".femmes-img");
const leftSection = document.querySelectorAll(".femmes-left");
const rightSection = document.querySelectorAll(".femmes-right");
const background = document.querySelectorAll(".background");
const button = document.querySelectorAll(".femmes-button");
const under = document.querySelectorAll(".second-step");

function displayWomenInfos() {
  return allWomens.forEach((women, index) => {
    women.addEventListener("click", () => {
      mainImage[index].classList.toggle("move");
      mainImage[index].style.transform = "translateX(30%)";

      leftSection[index].style.display = "none";
      rightSection[index].style.display = "none";
      background[index].style.display = "none";
      button[index].style.display = "none";
      under[index].classList.toggle("open");
    });
  });
}

displayWomenInfos();
