// Create new cards
const mainElement = document.querySelector('[data-js="main"]');
const addCardsForm = document.querySelector('[data-js="form"]');

addCardsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Store user inputs into object called data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Create new DOM Elements
  const cardList = document.createElement("ul");
  const cardListItem = document.createElement("li");
  const newCard = document.createElement("article");
  const question = document.createElement("h2");
  const answerButton = document.createElement("button");
  const answer = document.createElement("p");
  const tagList = document.createElement("ul");
  const tag = document.createElement("li");

  // Add css classes to created elements
  cardList.classList.add("card-list");
  cardListItem.classList.add("card-list__item");
  newCard.classList.add("card");
  question.classList.add("card__question");
  answerButton.classList.add("card__button-answer");
  tagList.classList.add("card__tag-list");
  tag.classList.add("card__tag-list-item");

  // Set text contents to created elements
  question.textContent = data.question;
  answerButton.textContent = "Show answer";
  answer.textContent = data.answer;
  tag.textContent = `#${data.tag}`;

  // Create bookmark button with innerHTML (unlike the task)
  const bookmarkButton = document.createElement("div");
  bookmarkButton.classList.add("card__button-bookmark");
  bookmarkButton.innerHTML = `
            <button
                class="bookmark"
                data-js="bookmark"
                aria-label="bookmark"
                type="button"
              >
                <svg
                  class="bookmark__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
            </button>
`;

  // Append created elements to corresponding parent element
  mainElement.append(cardList);
  cardList.append(cardListItem);
  cardListItem.append(newCard);
  newCard.append(question, answerButton, answer, tagList, bookmarkButton);
  tagList.append(tag);
});
