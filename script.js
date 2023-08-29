const numbersArray = [
  { value: 1, korean: "하나", sino: "일" },
  { value: 2, korean: "둘", sino: "이" },
  { value: 3, korean: "셋", sino: "삼" },
  { value: 4, korean: "넷", sino: "사" },
  { value: 5, korean: "다섯", sino: "오" },
  { value: 6, korean: "여섯", sino: "육" },
  { value: 7, korean: "일곱", sino: "칠" },
  { value: 8, korean: "여덟", sino: "팔" },
  { value: 9, korean: "아홉", sino: "구" },
  { value: 10, korean: "열", sino: "십" }
];

let currentLanguage = "korean";
let currentMode = "number";
let currentNumber;
let currentScore = 0;
let exercises = createExercises();

const displayElement = document.getElementById("display");
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const switchButton = document.getElementById("switch-mode");
const switchLanguageButton = document.getElementById("switch-language");
const resetButton = document.getElementById("reset");
const scoreElement = document.getElementById("score");

function createExercises(language="korean", mode="number") {
  var x;
  if(language==="korean") {
    if(mode==="number") {
      // korean to number game
      x = numbersArray.map(d => ({ question: d.korean, answer: d.value}) )
    } else {
      // number to korean guessing
      x = numbersArray.map(d => ({ question: d.value, answer: d.korean}) )
    }
  } else {
    if(mode==="number") {
      // sino-korean to number game
      x = numbersArray.map(d => ({ question: d.sino, answer: d.value}) )
    } else {
      // number to sino-korean guessing
      x = numbersArray.map(d => ({ question: d.value, answer: d.sino}) )
    }
  }
  return(x)
}

// Function to switch between languages
function switchLanguage() {
  currentLanguage = currentLanguage === "korean" ? "sino" : "korean";
  exercises = createExercises(currentLanguage, currentMode);
  console.log(exercises)
  updateDisplay();
}

// Function to switch between modes
function switchMode() {
  currentMode = currentMode === "number" ? "word" : "number";
  exercises = createExercises(currentLanguage, currentMode);
  updateDisplay();
}

// Function to update the displayed number
function updateDisplay() {
  const randomIndex = Math.floor(Math.random() * exercises.length);
  currentNumber = exercises[randomIndex];
  displayElement.textContent = currentNumber.question;
}

// Function to check the guess and update the score
function checkGuess() {
  const userGuess = guessInput.value;
  if (parseInt(userGuess) === currentNumber.answer) {
    currentScore++;
    scoreElement.textContent = `Score: ${currentScore}`;
  }
  guessInput.value = "";
  updateDisplay();
}

// Function to start the game over
function resetGame() {
  currentScore = 0;
  scoreElement.textContent = `Score: ${currentScore}`;
  updateDisplay();
}

// Event listeners
submitButton.addEventListener("click", checkGuess);
switchButton.addEventListener("click", switchMode);
switchLanguageButton.addEventListener("click", switchLanguage);
resetButton.addEventListener("click", resetGame);

// Initial display update
updateDisplay();
