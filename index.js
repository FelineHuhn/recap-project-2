// Bookmark button ---------------------------------------------------------

const bookmarkButton = document.querySelector('[data-js="bookmark"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// Answer button -----------------------------------------------------------

const showAnswerButton = document.querySelector('[data-js="button-answer"]');
const answer = document.querySelector('[data-js="answer"]');

// Solution 1

let isAnswerDisplayed = false;

showAnswerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");

  isAnswerDisplayed = !isAnswerDisplayed;
  showAnswerButton.textContent = isAnswerDisplayed
    ? "Hide answer"
    : "Show answer";
});
