// Variables for full overview of test
var testQuestions = 0;
var time = 100;
var timerMetric;
var testQuestionsCorrect = 0;

// Variables to callout unique elements 

var selectionEl = document.getElementById('selection');
var answersEl = document.getElementById('answers');
var timeremainingEl = document.getElementById('timeRemaining');
var questionEl = document.getElementById('questions');

// Buttons Var

var startbutton = document.getElementById("startbutton");

function startQuiz() {
    console.log("startQuiz run");
    var welcomeScreenEl = document.getElementById("welcomeScreen");
    welcomeScreenEl.setAttribute("class", "hidden");

    var questionScreenEl = document.getElementById("questionScreen");
    questionScreenEl.removeAttribute("class");

    timerMetric = setInterval(timerCoundown, 1000);
    timeLeftEl.textContent = time;

    displayQuestion();
};

function displayQuestion() {
    var questionData = questions[numericValue];

    var questionEl = document.getElementById('question')
    questionEl.textContent = questionData.question;
}

startbutton.addEventListener("click, startQuiz);
selectionEl.addEventListener("click", SelectOption);

var questions = [
    {
        question: "Why do we put the JS script at the bottom of the HTML? "
        selection: ["It looks cool", "Chris told me to put it there", "It is programmed that way", "Its due to how web browsers load a HTML file"]
        answer: "Its due to how web browsers load a HTML file",
    },
    {
        question: "What do Booleans do in JavaScript?"
        selection: ["A simple way to know yes or no via true or false", "It scares the other code into working", "Its a function to call out a console log", "It shows the format of JS"]
        answer: "A simple way to know yes or no via true or false",
    }, 
    {
        question: "What would you use an array for in JavaScript?"
        selection: ["You should use rrays when you want the element names to be numbers", "Its a mathmatic value to answer true or false", "I wish i knew", "Its a quick was to find the rays of the webpage"]
        answer: "You should use rrays when you want the element names to be numbers",
    },
    {
        question: "what is JavaScript used for? "
        selection: ["JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else", "JavaScript is the language for describing the presentation of Web pages, including colors, layout, and fonts", "JavaScript  is the language for describing the structure of Web pages", "JavaScript is used because it was created during the big bang"]
        answer: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else",
    },
    { 
        question: "Who invented JavaScript?"
        selection: ["Dana Boston", "Albert Einstien", "Dr.Seuss", "Brendan Eich"]
        answer: "Brendan Eich",
    }
]
