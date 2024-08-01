const inputUser = document.getElementById("user-input");
const resultBox = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const inputUserValidation = (input) => {
  inputUser.value = "";

  const regex =
    /^1? ?(\([0-9][0-9][0-9]\)|[0-9][0-9][0-9])( |-)?[0-9][0-9][0-9]( |-)?[0-9][0-9][0-9][0-9]$/;

  regex.test(input)
    ? (resultBox.innerHTML += `<p class="good">Valid US number:<br>${input}</p>`)
    : (resultBox.innerHTML += `<p class="bad">Invalid US number:<br>${input}</p>`);
};

const getInputValue = () => {
  inputUser.value
    ? inputUserValidation(inputUser.value)
    : alert("Please provide a phone number");
};

checkBtn.addEventListener("click", getInputValue);
inputUser.addEventListener("keypress", (e) => {
  if (e.key === "Enter") return getInputValue();
});

clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "";
});
