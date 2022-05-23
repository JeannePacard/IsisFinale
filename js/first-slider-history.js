const allWomens1 = document.querySelectorAll(".women-container");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    allWomens1.forEach((women) => {
      women.classList.remove("showWomen");
    });
    allWomens1[index].classList.add("showWomen");
  });
});
