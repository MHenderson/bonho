const koreanNumbers = [
  { number: "일", value: 1 }, // Add more numbers up to 100
];

const englishNumbers = [
  { number: "하나", value: 1 }, // Add more numbers up to 100
];

let currentMode = "korean"; // Initial mode
let currentNumber;
let currentScore = 0;

const displayElement = document.getElementById("display");
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const switchButton = document.getElementById("switch-mode");
const scoreElement = document.getElementById("score");

// Function to switch between modes
function switchMode() {
  currentMode = currentMode === "korean" ? "english" : "korean";
  updateDisplay();
}

// Function to update the displayed number
function updateDisplay() {
  const randomIndex = Math.floor(Math.random() * koreanNumbers.length);
  currentNumber = currentMode === "korean"
    ? koreanNumbers[randomIndex]
    : englishNumbers[randomIndex];
  displayElement.textContent = currentNumber.number;
}

// Function to check the guess and update the score
function checkGuess() {
  const userGuess = guessInput.value;
  if (parseInt(userGuess) === currentNumber.value) {
    currentScore++;
    scoreElement.textContent = `Score: ${currentScore}`;
  }
  guessInput.value = "";
  updateDisplay();
}

// Event listeners
submitButton.addEventListener("click", checkGuess);
switchButton.addEventListener("click", switchMode);

// Initial display update
updateDisplay();
