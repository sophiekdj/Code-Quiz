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
var submitScoreButton = document.querySelector("#submit-score");
var goBackBtn = document.querySelector("#go-back");

// Time left
var quizTimer = document.querySelector("#time");
var timeLeft = 5;

// Question content
var questionEl = document.querySelector("#question");

// Answer option buttons
var ans1 = document.querySelector("#option1");
var ans2 = document.querySelector("#option2");
var ans3 = document.querySelector("#option3");
var ans4 = document.querySelector("#option4");

var ansBtn = document.querySelector("#option");

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

console.log(quizQuestions[0].correctAnswer);
console.log(quizQuestions[0].question);

// Function to set question
function setQuestion() {
  //for (id < quizQuestions.length; id) {
  for (let i = 0; i < quizQuestions.length; i++) {
    questionEl.textContent = quizQuestions[i].question;
    ans1.textContent = quizQuestions[i].answers[0];
    ans2.textContent = quizQuestions[i].answers[1];
    ans3.textContent = quizQuestions[i].answers[2];
    ans4.textContent = quizQuestions[i].answers[3];
  }
}

// Event listener's for each answer button??
// Check answers loop
// Check answers loop
//function selectAns() {
//ansBtn.addEventListener("click", checkAnswer);
//}
//selectAns();
var score = 0;

// Function to check answer
function checkAnswer(event) {
  event.preventDefault();

  answerResultEl.style.display = "block";
  //if ((correctAnswer = false)) {
  //answerResultEl.textcontent = "Wrong!";
  //} else {
  //}

  if (quizQuestions[i].answers[correctAnswer]) {
    score++;
    answerResultEl.textContent("Correct!");
  } else {
    answerResultEl.textContent("Wrong!");
  }
}

// On page load, start page shown
function init() {
  quizPage.style.display = "none";
  finishPage.style.display = "none";
  highscorePage.style.display = "none";
  startPage.style.display = "block";
}
init();

function setTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    quizTimer.textContent = "Time: " + timeLeft;
    if (timeLeft === 0) {
      // or questionsLeft === 0...
      gameOver();
    }
  }, 1000);
}

function startQuiz() {
  startPage.style.display = "none";
  finishPage.style.display = "none";
  highscorePage.style.display = "none";

  // Timer start
  setQuestion();
  quizPage.style.display = "block";
  setTimer();
}

// End page screen after quiz is over
function gameOver() {
  clearInterval(timerInterval);
  startPage.style.display = "none";
  quizPage.style.display = "none";
  finishPage.style.display = "block";
  highscorePage.style.display = "none";
}

submitScoreButton.addEventListener("click", submitScore);

var initials = document.querySelector("#submit-form");

function submitScore() {
  localStorage.setItem(storeScore, score);
  localStorage.getItem(storeScore);
}

function showHighscores() {
  startPage.style.display = "none";
  quizPage.style.display = "none";
  finishPage.style.display = "none";
  highscorePage.style.display = "block";
}

highscoreButton.addEventListener("click", showHighscores);
goBackBtn.addEventListener("click", init);

// Starts the quiz!
startButton.addEventListener("click", startQuiz);
