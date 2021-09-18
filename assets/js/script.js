// Start page
var startPage = document.querySelector("#start-page");
// Quiz page
var quizPage = document.querySelector("#quiz-page");
// Complete quiz page
var finishPage = document.querySelector("#finish");
// Highscore page
var highscorePage = document.querySelector("#highscores");

// Start button
var startButton = document.querySelector("#start-quiz-button");
var highscoreButton = document.querySelector("#view-highscores");

// Time left
var quizTimer = document.querySelector("#time");
var timeLeft = 76;

// Question content
var questionEl = document.querySelector("#question");

// Answer option buttons
var ans1 = document.querySelector("#option1");
var ans2 = document.querySelector("#option2");
var ans3 = document.querySelector("#option3");
var ans4 = document.querySelector("#option4");

var answerResultEl = document.querySelector("#answerResult");

var answers;
var correctAnswer;

var currentQuestionIndex = 0;

var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: "2",
  },

  {
    question: "The condition in an if / else statement is enclosed within ___.",
    answers: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parentheses",
      "4. Square brackets",
    ],
    correctAnswer: "2",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answers: [
      "1. Numbers and strings",
      "2. Other arrays",
      "3. Booleans",
      "4. All of the above",
    ],
    correctAnswer: "3",
  },
  {
    question:
      "String values must be enclosed with ___ when being assigned to variables",
    answers: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parentheses"],
    correctAnswer: "2",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. Terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    correctAnswer: "3",
  },
];

// Function to set question
function setQuestion(id) {
  if (id < quizQuestions.length) {
    questionEl.textContent = quizQuestions[id].question;
    ans1.textContent = quizQuestions[id].answers[0];
    ans2.textContent = quizQuestions[id].answers[1];
    ans3.textContent = quizQuestions[id].answers[2];
    ans4.textContent = quizQuestions[id].answers[3];
  }
}
function generateQuizQuestion() {
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionEl.innerHTML = "<p>" + currentQuestion.question + "</p>";

  ans1.textContent = quizQuestions.answers[0];
  ans2.textContent = quizQuestions.answers[1];
  ans3.textContent = quizQuestions.answers[2];
  ans4.textContent = quizQuestions.answers[3];
}

// Function to check answer
function checkAnswer(event) {
  event.preventDefault();

  answerResultEl.style.display = "block";
  if ((correctAnswer = false)) {
    answerResultEl.textcontent = "Wrong!";
  }
}

// On page load, start page shown
function init() {
  quizPage.style.display = "none";
  finishPage.style.display = "none";
  highscorePage.style.display = "none";
}
init();

function setTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    quizTimer.textContent = "Time: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function startQuiz() {
  startPage.style.display = "none";
  finishPage.style.display = "none";
  highscorePage.style.display = "none";

  // Timer start
  setTimer();
  setQuestion(id);
  quizPage.style.display = "block";
}

// End page screen after quiz is over
function showScore() {
  clearInterval(timeInterval);
}

function showHighscores() {}

highscoreButton.addEventListener("click", showHighscores());

// Starts the quiz!
startButton.addEventListener("click", startQuiz);
