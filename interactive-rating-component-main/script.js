const ratingValue = document.querySelectorAll(".rating-value");
const submit = document.querySelector("form");
const cardRate = document.querySelector(".card-rate");
const cardThankYou = document.querySelector(".card-thank-you");
const ratingFeedback = document.querySelector(".rating-feedback");

let value;

ratingValue.forEach((input) => {
  input.addEventListener("change", (e) => {
    value = e.target.value;
    console.log(value);
  });
});

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!value) {
    alert("Select a rating!");
  } else {
    cardRate.classList.add("hidden");
    cardThankYou.classList.remove("hidden");
    ratingFeedback.innerHTML = `<p>You selected ${value} out of 5</p>`;
  }
});
