
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");


function loadQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(li);
  });
}


function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
    feedbackElement.textContent = "Correct!";
  } else {
    feedbackElement.textContent = "Incorrect!";
  }
  nextButton.disabled = false;
  optionsElement.classList.add("disabled");
}


function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
    nextButton.disabled = true;
    optionsElement.classList.remove("disabled");
    feedbackElement.textContent = "";
  } else {
    showFinalScore();
  }
}


function showFinalScore() {
questionElement.textContent = "Quiz Completed!";
optionsElement.innerHTML = "";
feedbackElement.textContent = "";
scoreElement.textContent = score;
nextButton.disabled = true;
restartButton.style.display = "inline-block";
}


function restartQuiz() {
currentQuestionIndex = 0;
score = 0;
restartButton.style.display = "none";
loadQuestion();
}


nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);


loadQuestion();