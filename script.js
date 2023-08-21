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
  { number: "열", value: 10 },
  { number: "열하나", value: 11 },
  { number: "열둘", value: 12 },
  { number: "열셋", value: 13 },
  { number: "열넷", value: 14 },
  { number: "열다섯", value: 15 },
  { number: "열여섯", value: 16 },
  { number: "열일곱", value: 17 },
  { number: "열여덟", value: 18 },
  { number: "열아홉", value: 19 },
  { number: "스물", value: 20 },
  { number: "스물하나", value: 21 },
  { number: "스물둘", value: 22 },
  { number: "스물셋", value: 23 },
  { number: "스물넷", value: 24 },
  { number: "스물다섯", value: 25 },
  { number: "스물여섯", value: 26 },
  { number: "스물일곱", value: 27 },
  { number: "스물여덟", value: 28 },
  { number: "스물아홉", value: 29 },
  { number: "서른", value: 30 },
  { number: "서른하나", value: 31 },
  { number: "서른둘", value: 32 },
  { number: "서른셋", value: 33 },
  { number: "서른넷", value: 34 },
  { number: "서른다섯", value: 35 },
  { number: "서른여섯", value: 36 },
  { number: "서른일곱", value: 37 },
  { number: "서른여덟", value: 38 },
  { number: "서른아홉", value: 39 },
  { number: "마흔", value: 40 },
  { number: "마흔하나", value: 41 },
  { number: "마흔둘", value: 42 },
  { number: "마흔셋", value: 43 },
  { number: "마흔넷", value: 44 },
  { number: "마흔다섯", value: 45 },
  { number: "마흔여섯", value: 46 },
  { number: "마흔일곱", value: 47 },
  { number: "마흔여덟", value: 48 },
  { number: "마흔아홉", value: 49 },
  { number: "쉰", value: 50 },
  { number: "쉰하나", value: 51 },
  { number: "쉰둘", value: 52 },
  { number: "쉰셋", value: 53 },
  { number: "쉰넷", value: 54 },
  { number: "쉰다섯", value: 55 },
  { number: "쉰여섯", value: 56 },
  { number: "쉰일곱", value: 57 },
  { number: "쉰여덟", value: 58 },
  { number: "쉰아홉", value: 59 },
  { number: "예순", value: 60 },
  { number: "예순하나", value: 61 },
  { number: "예순둘", value: 62 },
  { number: "예순셋", value: 63 },
  { number: "예순넷", value: 64 },
  { number: "예순다섯", value: 65 },
  { number: "예순여섯", value: 66 },
  { number: "예순일곱", value: 67 },
  { number: "예순여덟", value: 68 },
  { number: "예순아홉", value: 69 },
  { number: "일흔", value: 70 },
  { number: "일흔하나", value: 71 },
  { number: "일흔둘", value: 72 },
  { number: "일흔셋", value: 73 },
  { number: "일흔넷", value: 74 },
  { number: "일흔다섯", value: 75 },
  { number: "일흔여섯", value: 76 },
  { number: "일흔일곱", value: 77 },
  { number: "일흔여덟", value: 78 },
  { number: "일흔아홉", value: 79 },
  { number: "여든", value: 80 },
  { number: "여든하나", value: 81 },
  { number: "여든둘", value: 82 },
  { number: "여든셋", value: 83 },
  { number: "여든넷", value: 84 },
  { number: "여든다섯", value: 85 },
  { number: "여든여섯", value: 86 },
  { number: "여든일곱", value: 87 },
  { number: "여든여덟", value: 88 },
  { number: "여든아홉", value: 89 },
  { number: "아흔", value: 90 },
  { number: "아흔하나", value: 91 },
  { number: "아흔둘", value: 92 },
  { number: "아흔셋", value: 93 },
  { number: "아흔넷", value: 94 },
  { number: "아흔다섯", value: 95 },
  { number: "아흔여섯", value: 96 },
  { number: "아흔일곱", value: 97 },
  { number: "아흔여덟", value: 98 },
  { number: "아흔아홉", value: 99 },
  { number: "백", value: 100 }
];

const englishNumbers = [
  { number: 1, value: "하나" },
  { number: 2, value: "둘" },
  { number: 3, value: "셋" },
  { number: 4, value: "넷" },
  { number: 5, value: "다섯" },
  { number: 6, value: "여섯" },
  { number: 7, value: "일곱" },
  { number: 8, value: "여덟" },
  { number: 9, value: "아홉" },
  { number: 10, value: "열" },
  { number: 11, value: "열하나" },
  { number: 12, value: "열둘" },
  { number: 13, value: "열셋" },
  { number: 14, value: "열넷" },
  { number: 15, value: "열다섯" },
  { number: 16, value: "열여섯" },
  { number: 17, value: "열일곱" },
  { number: 18, value: "열여덟" },
  { number: 19, value: "열아홉" },
  { number: 20, value: "스물" },
  { number: 21, value: "스물하나" },
  { number: 22, value: "스물둘" },
  { number: 23, value: "스물셋" },
  { number: 24, value: "스물넷" },
  { number: 25, value: "스물다섯" },
  { number: 26, value: "스물여섯" },
  { number: 27, value: "스물일곱" },
  { number: 28, value: "스물여덟" },
  { number: 29, value: "스물아홉" },
  { number: 30, value: "서른" },
  { number: 31, value: "서른하나" },
  { number: 32, value: "서른둘" },
  { number: 33, value: "서른셋" },
  { number: 34, value: "서른넷" },
  { number: 35, value: "서른다섯" },
  { number: 36, value: "서른여섯" },
  { number: 37, value: "서른일곱" },
  { number: 38, value: "서른여덟" },
  { number: 39, value: "서른아홉" },
  { number: 40, value: "마흔" },
  { number: 41, value: "마흔하나" },
  { number: 42, value: "마흔둘" },
  { number: 43, value: "마흔셋" },
  { number: 44, value: "마흔넷" },
  { number: 45, value: "마흔다섯" },
  { number: 46, value: "마흔여섯" },
  { number: 47, value: "마흔일곱" },
  { number: 48, value: "마흔여덟" },
  { number: 49, value: "마흔아홉" },
  { number: 50, value: "쉰" },
  { number: 51, value: "쉰하나" },
  { number: 52, value: "쉰둘" },
  { number: 53, value: "쉰셋" },
  { number: 54, value: "쉰넷" },
  { number: 55, value: "쉰다섯" },
  { number: 56, value: "쉰여섯" },
  { number: 57, value: "쉰일곱" },
  { number: 58, value: "쉰여덟" },
  { number: 59, value: "쉰아홉" },
  { number: 60, value: "예순" },
  { number: 61, value: "예순하나" },
  { number: 62, value: "예순둘" },
  { number: 63, value: "예순셋" },
  { number: 64, value: "예순넷" },
  { number: 65, value: "예순다섯" },
  { number: 66, value: "예순여섯" },
  { number: 67, value: "예순일곱" },
  { number: 68, value: "예순여덟" },
  { number: 69, value: "예순아홉" },
  { number: 70, value: "일흔" },
  { number: 71, value: "일흔하나" },
  { number: 72, value: "일흔둘" },
  { number: 73, value: "일흔셋" },
  { number: 74, value: "일흔넷" },
  { number: 75, value: "일흔다섯" },
  { number: 76, value: "일흔여섯" },
  { number: 77, value: "일흔일곱" },
  { number: 78, value: "일흔여덟" },
  { number: 79, value: "일흔아홉" },
  { number: 80, value: "여든" },
  { number: 81, value: "여든하나" },
  { number: 82, value: "여든둘" },
  { number: 83, value: "여든셋" },
  { number: 84, value: "여든넷" },
  { number: 85, value: "여든다섯" },
  { number: 86, value: "여든여섯" },
  { number: 87, value: "여든일곱" },
  { number: 88, value: "여든여덟" },
  { number: 89, value: "여든아홉" },
  { number: 90, value: "아흔" },
  { number: 91, value: "아흔하나" },
  { number: 92, value: "아흔둘" },
  { number: 93, value: "아흔셋" },
  { number: 94, value: "아흔넷" },
  { number: 95, value: "아흔다섯" },
  { number: 96, value: "아흔여섯" },
  { number: 97, value: "아흔일곱" },
  { number: 98, value: "아흔여덟" },
  { number: 99, value: "아흔아홉" },
  { number: 100, value: "백" }
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
