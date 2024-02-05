// FIRST METHOD : use traversing the dom
/* const buttons = Array.from(document.querySelectorAll(".question-btn"));

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
  });
}); */

// SECOND METHOD : use selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const button = question.querySelector(".question-btn");
  button.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
