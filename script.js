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
  { value: 10, korean: "열", sino: "십" },
  { value: 11, korean: "열하나", sino: "십일" },
  { value: 12, korean: "열둘", sino: "십이" },
  { value: 13, korean: "열셋", sino: "십삼" },
  { value: 14, korean: "열넷", sino: "십사" },
  { value: 15, korean: "열다섯", sino: "십오" },
  { value: 16, korean: "열여섯", sino: "십육" },
  { value: 17, korean: "열일곱", sino: "십칠" },
  { value: 18, korean: "열여덟", sino: "십팔" },
  { value: 19, korean: "열아홉", sino: "십구" },
  { value: 20, korean: "스물", sino: "이십" },
  { value: 21, korean: "스물하나", sino: "이십일" },
  { value: 22, korean: "스물둘", sino: "이십이" },
  { value: 23, korean: "스물셋", sino: "이십삼" },
  { value: 24, korean: "스물넷", sino: "이십사" },
  { value: 25, korean: "스물다섯", sino: "이십오" },
  { value: 26, korean: "스물여섯", sino: "이십육" },
  { value: 27, korean: "스물일곱", sino: "이십칠" },
  { value: 28, korean: "스물여덟", sino: "이십팔" },
  { value: 29, korean: "스물아홉", sino: "이십구" },
  { value: 30, korean: "서른", sino: "삼십" },
  { value: 31, korean: "서른하나", sino: "삼십일" },
  { value: 32, korean: "서른둘", sino: "삼십이" },
  { value: 33, korean: "서른셋", sino: "삼십삼" },
  { value: 34, korean: "서른넷", sino: "삼십사" },
  { value: 35, korean: "서른다섯", sino: "삼십오" },
  { value: 36, korean: "서른여섯", sino: "삼십육" },
  { value: 37, korean: "서른일곱", sino: "삼십칠" },
  { value: 38, korean: "서른여덟", sino: "삼십팔" },
  { value: 39, korean: "서른아홉", sino: "삼십구" },
  { value: 40, korean: "마흔", sino: "사십" },
  { value: 41, korean: "마흔하나", sino: "사십일" },
  { value: 42, korean: "마흔둘", sino: "사십이" },
  { value: 43, korean: "마흔셋", sino: "사십삼" },
  { value: 44, korean: "마흔넷", sino: "사십사" },
  { value: 45, korean: "마흔다섯", sino: "사십오" },
  { value: 46, korean: "마흔여섯", sino: "사십육" },
  { value: 47, korean: "마흔일곱", sino: "사십칠" },
  { value: 48, korean: "마흔여덟", sino: "사십팔" },
  { value: 49, korean: "마흔아홉", sino: "사십구" },
  { value: 50, korean: "쉰", sino: "오십" },
  { value: 51, korean: "쉰하나", sino: "오십일" },
  { value: 52, korean: "쉰둘", sino: "오십이" },
  { value: 53, korean: "쉰셋", sino: "오십삼" },
  { value: 54, korean: "쉰넷", sino: "오십사" },
  { value: 55, korean: "쉰다섯", sino: "오십오" },
  { value: 56, korean: "쉰여섯", sino: "오십육" },
  { value: 57, korean: "쉰일곱", sino: "오십칠" },
  { value: 58, korean: "쉰여덟", sino: "오십팔" },
  { value: 59, korean: "쉰아홉", sino: "오십구" },
  { value: 60, korean: "예순", sino: "육십" },
  { value: 61, korean: "예순하나", sino: "육십일" },
  { value: 62, korean: "예순둘", sino: "육십이" },
  { value: 63, korean: "예순셋", sino: "육십삼" },
  { value: 64, korean: "예순넷", sino: "육십사" },
  { value: 65, korean: "예순다섯", sino: "육십오" },
  { value: 66, korean: "예순여섯", sino: "육십육" },
  { value: 67, korean: "예순일곱", sino: "육십칠" },
  { value: 68, korean: "예순여덟", sino: "육십팔" },
  { value: 69, korean: "예순아홉", sino: "육십구" },
  { value: 70, korean: "일흔", sino: "칠십" },
  { value: 71, korean: "일흔하나", sino: "칠십일" },
  { value: 72, korean: "일흔둘", sino: "칠십이" },
  { value: 73, korean: "일흔셋", sino: "칠십삼" },
  { value: 74, korean: "일흔넷", sino: "칠십사" },
  { value: 75, korean: "일흔다섯", sino: "칠십오" },
  { value: 76, korean: "일흔여섯", sino: "칠십육" },
  { value: 77, korean: "일흔일곱", sino: "칠십칠" },
  { value: 78, korean: "일흔여덟", sino: "칠십팔" },
  { value: 79, korean: "일흔아홉", sino: "칠십구" },
  { value: 80, korean: "여든", sino: "팔십" },
  { value: 81, korean: "여든하나", sino: "팔십일" },
  { value: 82, korean: "여든둘", sino: "팔십이" },
  { value: 83, korean: "여든셋", sino: "팔십삼" },
  { value: 84, korean: "여든넷", sino: "팔십사" },
  { value: 85, korean: "여든다섯", sino: "팔십오" },
  { value: 86, korean: "여든여섯", sino: "팔십육" },
  { value: 87, korean: "여든일곱", sino: "팔십칠" },
  { value: 88, korean: "여든여덟", sino: "팔십팔" },
  { value: 89, korean: "여든아홉", sino: "팔십구" },
  { value: 90, korean: "아흔", sino: "구십" },
  { value: 91, korean: "아흔하나", sino: "구십일" },
  { value: 92, korean: "아흔둘", sino: "구십이" },
  { value: 93, korean: "아흔셋", sino: "구십삼" },
  { value: 94, korean: "아흔넷", sino: "구십사" },
  { value: 95, korean: "아흔다섯", sino: "구십오" },
  { value: 96, korean: "아흔여섯", sino: "구십육" },
  { value: 97, korean: "아흔일곱", sino: "구십칠" },
  { value: 98, korean: "아흔여덟", sino: "구십팔" },
  { value: 99, korean: "아흔아홉", sino: "구십구" },
  { value: 100, korean: "백", sino: "백" },
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

switchButton.textContent = "Numbers";
switchLanguageButton.textContent = "Sino-Korean";

function createExercises(language = "korean", mode = "number") {
  var x;
  if (language === "korean") {
    if (mode === "number") {
      // korean to number game
      x = numbersArray.map((d) => ({ question: d.korean, answer: d.value }));
    } else {
      // number to korean guessing
      x = numbersArray.map((d) => ({ question: d.value, answer: d.korean }));
    }
  } else {
    if (mode === "number") {
      // sino-korean to number game
      x = numbersArray.map((d) => ({ question: d.sino, answer: d.value }));
    } else {
      // number to sino-korean guessing
      x = numbersArray.map((d) => ({ question: d.value, answer: d.sino }));
    }
  }
  return x;
}

// Function to switch between languages
function switchLanguage() {
  currentLanguage = currentLanguage === "korean" ? "sino" : "korean";
  exercises = createExercises(currentLanguage, currentMode);
  switchLanguageButton.textContent =
    currentLanguage === "korean" ? "Sino-Korean" : "Korean";
  updateDisplay();
}

// Function to switch between modes
function switchMode() {
  currentMode = currentMode === "number" ? "word" : "number";
  exercises = createExercises(currentLanguage, currentMode);
  switchButton.textContent = currentMode === "number" ? "Numbers" : "Words";
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
guessInput.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    checkGuess();
  }
});

// Initial display update
updateDisplay();
