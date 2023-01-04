// Variables for full overview of test
var questionNumber = 0;
var time = 100;
var timeVar;
var questionsCorrect = 0;
var userScore;

// Variables to callout unique elements 

var optionsEl = document.getElementById("options");
var responseEl = document.getElementById("response");
var timeLeftEl = document.getElementById('timeLeft');
var returnHomeEl = document.getElementById('returnHome');

// Buttons Var

var startButton = document.getElementById("startButton");
var viewHighBtn = document.getElementById("viewHigh");

//JS for new pages

var welcomeScreenEl = document.getElementById ("welcomeScreen");
var questionScreenEl = document.getElementById("questionScreen");
var scoreScreenEl = document.getElementById("scoreScreen");
var highScoreScreenEl = document.getElementById("highScoreScreen");

//Global

startButton.addEventListener("click", "startQuiz");
responseEl.addEventListener("class", "returnHome" )
viewHighBtn.addEventListener("click", "highScoreScreen");
optionsEl.addEventListener("click", "chooseOption");

//Function for quiz

function startQuiz() {

    welcomeScreenEl.setAttribute("class", "hidden");

    returnHomeEl.removeAttribute("class");

    questionScreenEl.removeAttribute("class");

    //Timer

    timeVar = setInterval(timerCoundown, 1000);
    timeLeftEl.textContent = time;

    displayQuestion();

    var questionScreenEl = document.getElementById("questionScreen");
    questionScreenEl.removeAttribute("class");

    timerMetric = setInterval(timerCoundown, 1000);
    timeLeftEl.textContent = time;

    displayQuestion();
};

function timerCoundown() {
    time--;

    timeRemainingEl.textContent = time;
    if (time <= 0) {
        scoreScreenEl();
    };
}

function displayQuestion() {
    var questionInfo = questions[questionNumber];

    var questionEl = document.getElementById("question");
    questionEl.textContent = questionInfo.question;
    optionsEl.innerHTML = '';

    for (var i = 0; i < questionInfo.options.length; i++) {
        var option = questionInfo.options[i];
        var optionButton = document.createElement("button");
        optionButton.setAttribute("class", "option");
        optionButton.setAttribute("value", option);
        optionButton.textContent = i + 1 `. ${option}`;
        optionsEl.appendChild(optionButton);
    };
};

function chooseOption(event) {
    var buttonEl = event.target;

    if (!buttonEl.matches(".option")) {
        return;
    };

    if (buttonEl.value !== questions[questionNumber].answer) {
        time -= 15;
        if (time <= 0) {
            time = 0;
        }

        responseEl.setAttribute("class", "incorrect");
        responseEl.textContent = "Incorrect";
    } else {
        questionsCorrect++;

        responseEl.setAttribute("class", "correct");
        responseEl.textContent("class", "Correct");
    };

    setTimeout(function () {
        responseEl.setAttribute("class", "hidden");
    }, 1000);

    questionNumber++;

    userScore = time * questionsCorrect;
    if (time <= 0 || questionNumber === question.length) {
        scoreScreen();
    } else {
        displayQuestion();
    };
};

function scoreScreen() {

    clearInterval(timeVar);

    questionScreenEl.removeAttribute("class", "hidden");

    scoreScreenEl.removeAttribute("class");

    var scoreEl = document.getElementById("score");
    scoreEl.textContent = userScore;

    var saveScoreBtn = document.getElementById("saveScore");
    saveScoreBtn.addEventListener("click", saveScore);
};

function saveScore() {
    var userNameEl = document.getElementById("userName");
    var userName = userNameEl.value;

    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];
    var userInfo = {
        userName: userName,
        userScore: userScore,
    };

    scores.push(userInfor);
    window.localStorage.setItem("scores", JSON.stringify(scores));

    highScoreScreen();
}

function highScoreScreen() {
    welcomeScreenEl.setAttribute("class", "hidden");
    questionScreenEl.setAttribute("class", "hidden");
    scoreScreenEl.setAttribute("class", "hidden");

    highScoreScreenEl.removeAttribute("class");
    viewHighBtn.setAttribute("class", "hidden");

    returnHomeEl.removeAttribute("class")

    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

    scores.sort(function (a, b) {
        return b.userScore - a.userScore;
    })

    for (var i = 0; i < scores.length; i++) {
        var scoreLi = document.createElement("li");
        scoreLi.textContent = scores[i].userName + ": " + scores[i].userScore;

        var score01 = document.getElementById("score01");
        score01.appendChild(scoreLi);
    }

    var clearScoreBtn = document.getElementById("clearScores");
    clearScoresBtn.addEventListener("click", clearScores);
}

function clearScores() {
    window.localStorage.removeItem('scores');
    returnHomeEl();
}

function returnHome() {
    window.location.reload();
}

var questions = [
    {
        question: "Why do we put the JS script at the bottom of the HTML?",
        selection: ["It looks cool", "Chris told me to put it there", "It is programmed that way", "Its due to how web browsers load a HTML file"],
        answer: "Its due to how web browsers load a HTML file",
    },
    {
        question: "What do Booleans do in JavaScript?",
        selection: ["A simple way to know yes or no via true or false", "It scares the other code into working", "Its a function to call out a console log", "It shows the format of JS"],
        answer: "A simple way to know yes or no via true or false",
    },
    {
        question: "What would you use an array for in JavaScript?",
        selection: ["You should use rrays when you want the element names to be numbers", "Its a mathmatic value to answer true or false", "I wish i knew", "Its a quick was to find the rays of the webpage"],
        answer: "You should use rrays when you want the element names to be numbers",
    },
    {
        question: "what is JavaScript used for?",
        selection: ["JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else", "JavaScript is the language for describing the presentation of Web pages, including colors, layout, and fonts", "JavaScript  is the language for describing the structure of Web pages", "JavaScript is used because it was created during the big bang"],
        answer: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else",
    },
    {
        question: "Who invented JavaScript?",
        selection: ["Dana Boston", "Albert Einstien", "Dr.Seuss", "Brendan Eich"],
        answer: "Brendan Eich",
    }
]