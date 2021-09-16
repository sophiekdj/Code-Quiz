// Quiz page
var quizPage = document.querySelector("#quiz-page");

// Question content
var questionEl = document.querySelector("#question");

// Answer option buttons
var ans1 = document.querySelector("#option1");
var ans2 = document.querySelector("#option2");
var ans3 = document.querySelector("#option3");
var ans4 = document.querySelector("#option4");

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
function setQuestion() {
  questionEl.textContent = quizQuestions.question;
  ans1.textContent = quizQuestions.answers[0];
  ans2.textContent = quizQuestions.answers[1];
  ans3.textContent = quizQuestions.answers[2];
  ans4.textContent = quizQuestions.answers[3];
}
