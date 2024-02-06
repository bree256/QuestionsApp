const questionAnswers = document.querySelectorAll(".question-answer");
const container = document.querySelector(".container");

questionAnswers.forEach((questionAnswer) => {
  const question = questionAnswer.querySelector(".question");
  const answer = questionAnswer.querySelector(".answer");
  const iconPlus = questionAnswer.querySelector(".fa-plus");
  const iconMinus = questionAnswer.querySelector(".fa-minus");

  question.addEventListener("click", clicked);
  question.addEventListener("click", answerStyle);

  function clicked() {
    answer.style.display =
      answer.style.display === "none" || answer.style.display === ""
        ? "block"
        : "none";

    iconPlus.classList.toggle("hide");
    iconMinus.classList.toggle("hide");
  }

  function answerStyle() {
    answer.style.paddingBottom = "1rem";
  }
});
