const counterValue = document.querySelector("#value");

document
  .querySelector("[data-action='decrement']")
  .addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
  });

document
  .querySelector("[data-action='increment']")
  .addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
  });
