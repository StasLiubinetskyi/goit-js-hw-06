const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const expectedLength = input.dataset.length;
  const currentLength = input.value.length;

  if (currentLength === Number(expectedLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});


const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);