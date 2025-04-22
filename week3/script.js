// Quiz Data
const quizData = [
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Ordinance Map", "Document Orientation Mode"],
    correct: 0
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- Comment -->", "// Comment", "** Comment **", "## Comment"],
    correct: 1
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = quizData[currentQuestion];
  const result = document.getElementById("result");

  if (selected === q.correct) {
    result.innerHTML = "<strong style='color:green'>Correct!</strong>";
  } else {
    result.innerHTML = "<strong style='color:red'>Incorrect.</strong> The correct answer was: " + q.options[q.correct];
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    setTimeout(() => {
      result.innerHTML = "";
      loadQuestion();
    }, 1500);
  } else {
    setTimeout(() => {
      result.innerHTML = "<strong style='color:blue'>Quiz Completed!</strong>";
      document.getElementById("question").innerText = "Thank you for playing!";
      document.getElementById("answers").innerHTML = "";
    }, 1500);
  }
}

// Load first question on page load
window.onload = loadQuestion;

// Joke Fetching from API
async function fetchJoke() {
  const jokeBox = document.getElementById("jokeBox");
  jokeBox.innerText = "Fetching a joke...";
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeBox.innerText = `${data.setup}\n\n${data.punchline}`;
  } catch (err) {
    jokeBox.innerText = "Oops! Couldn't fetch a joke.";
  }
}
