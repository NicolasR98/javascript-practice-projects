//Selectors
const chevronButtons = document.querySelectorAll(".header_chevron");
const bodyQuestion = document.querySelectorAll(".body_text");

const removeActive = () => {
  bodyQuestion.forEach((ele, index) => {
    ele.classList.remove("active");
    chevronButtons[index].classList.remove("active");
  });
};

chevronButtons.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    if (!ele.classList.contains("active")) {
      ele.classList.toggle("active");
      bodyQuestion[index].classList.toggle("active");
      removeActive();
    }
    ele.classList.toggle("active");
    bodyQuestion[index].classList.toggle("active");
  });
});
