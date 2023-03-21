var startButton = document.querySelector(".start-button");
var questionsContainer = document.querySelector(".question-container");
var answerButton = document.querySelector("#answers");
var timerCountdown = document.querySelector(".timer-count");
var scoreEle = document.querySelector("#score");
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector(".submit");
var resultsContainer = document.querySelector(".results-container");


//adding question container
const questions = [
    {
      question: "Which of these is not a Javascript Data type?",
      answers: [
        { text: "Cookies", correct: true },
        { text: "Boolean", correct: false },
        { text: "Null", correct: false },
        { text: "String", correct: false },
      ],
    },
        {
          question: "What does NaN mean?",
          answers: [
            { text: "Not a Number", correct: true },
            { text: "Eastern Indian Bread", correct: false },
            { text: "A Non Numerator ", correct: false },
            { text: "Non-existing", correct: false },
          ],
        },
        {
            question: "What is Javascript?",
            answers: [
              { text: "A up and coming coffee shop", correct: false },
              { text: "An ancient form of writing", correct: false },
              { text: "An interactive scripting language used in web development", correct: true },
              { text: "Hyperlinking Text Marking Language", correct: false },
            ],
          },
        ];
        

//event listener to start the quiz
startButton.addEventListener("click", startQuiz);
//event listener for answers
answerButton.addEventListener("click", checkAnswer);
//event listener for score
submitButton.addEventListener("click", saveScore);

//timer for quiz
function startQuiz() {
    startButton.classList.add("hide");
    showQuestion();
    timer = setInterval(function(){
        timeRemaining--;
        timerCountdown.textContent = timeRemaining;
        if (timeRemaining === 0){
            endQuiz();
          }
        }
    },1000);
}

function showQuestion() {
    questionsContainer.innerHTML = "";
    answerButton.innerHTML = "";
//question display
    var currentQuestion = questions[currentQuestionIndex];
    var questionElement = document.createElement("h2");
    questionElement.textContent = currentQuestion.question;
    questionsContainer.appendChild(questionElement);

currentQuestion.answers.forEach((answer) => {
    var answerButton = document.createElement("button");
    answerButton.textContent = answer.text;
    if (answer.correct){
        answerButton.dataset.correct = answer.correct;

    });
}

function checkAnswer(event){
    var selectedButton = event.target;
    if (selectedButton.dataset.correct){
        scoreEle++;
        scoreEle.textContent = score;
    } else {
        timeRemaining -= 2;
        if (timeRemaining < 0) {
            endQuiz();
        }
    }
    }

