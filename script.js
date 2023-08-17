const koreanNumbers = [
  { number: "하나", value: 1 },
  { number: "둘", value: 2 },
  { number: "셋", value: 3 },
  { number: "넷", value: 4 },
  { number: "다섯", value: 5 },
  { number: "여섯", value: 6 },
  { number: "일곱", value: 7 },
  { number: "여덟", value: 8 },
  { number: "아홉", value: 9 },
  { number: "열", value: 10 }, // Add more numbers up to 100
];

const englishNumbers = [
  { number: 1, value: "하나" }, // Add more numbers up to 100
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
