/*jshint esversion: 6 */

// define required variables
let currentQuestion = 0;
let score = 0;
let answerA = document.getElementById("answer-a");
let answerB = document.getElementById("answer-b");
let answerC = document.getElementById("answer-c");
let answerD = document.getElementById("answer-d");

let containerQuiz = document.getElementById("quiz-container");
let choice = document.getElementsByClassName("choice");

let opt1 = document.getElementById("choice-a");
let opt2 = document.getElementById("choice-b");
let opt3 = document.getElementById("choice-c");
let opt4 = document.getElementById("choice-d");

// store questions and answers in this object array
let questions = [

    {
        question: "Which planet is closest to the sun?",
        choiceA: "Jupiter",
        choiceB: "Neptune",
        choiceC: "Mars",
        choiceD: "Mercury",
        correctAnswer: "Mercury"
    },
    {
        question: "The moon called Titan orbits which planet?",
        choiceA: "Saturn",
        choiceB: "Uranus",
        choiceC: "Venus",
        choiceD: "Earth",
        correctAnswer: "Saturn"
    },
    {
        question: "How old is the universe in years?",
        choiceA: "11.5 million years old",
        choiceB: "13.8 billion years old",
        choiceC: "50 billion years old",
        choiceD: "750 million years old",
        correctAnswer: "13.8 billion years old"
    },
    {
        question: "What is the largest planet in our solar system?",
        choiceA: "Earth",
        choiceB: "Saturn",
        choiceC: "Jupiter",
        choiceD: "Neptune",
        correctAnswer: "Jupiter"
    },
    {
        question: "How old is the sun?",
        choiceA: "4.6 billion years old",
        choiceB: "10.6 billion years old",
        choiceC: "4.6 million years old",
        choiceD: "10.6 million years old",
        correctAnswer: "4.6 billion years old"
    },
    {
        question: "What force bends light rays travelling through the universe?",
        choiceA: "Electromagnetism",
        choiceB: "Gravity",
        choiceC: "The Strong Nuclear Force",
        choiceD: "The Weak Nuclear Force",
        correctAnswer: "Gravity"
    },
    {
        question: "What is so powerful that even light cannot escape?",
        choiceA: "A neutron star",
        choiceB: "A black hole",
        choiceC: "A supergiant star",
        choiceD: "A nebula",
        correctAnswer: "A black hole"
    },
    {
        question: "What is the most common type of star in the Milky Way?",
        choiceA: "Red dwarf stars",
        choiceB: "Protostars",
        choiceC: "White dwarf stars",
        choiceD: "Red giant stars",
        correctAnswer: "Red dwarf stars"
    },
    {
        question: "How many Earths could fit inside the sun?",
        choiceA: "350",
        choiceB: "10 000",
        choiceC: "550 000",
        choiceD: "1 300 000",
        correctAnswer: "1 300 000"
    },
    {
        question: "How many planets are there in the solar system?",
        choiceA: "10",
        choiceB: "9",
        choiceC: "8",
        choiceD: "7",
        correctAnswer: "8"
    },
];

// get reference to button and add event listener
let nextQuestion = document.getElementById("next-question");
nextQuestion.addEventListener("click", getNextQuestion);

displayQuestion();

/**
* load the site with quiz questions and answers
*/
function displayQuestion() {

    deselectAnswer();

    let currentQuestionData = questions[currentQuestion];

    let visibleQuestion = document.getElementById("question");
    visibleQuestion.innerHTML = currentQuestionData.question;

    answerA.innerHTML = currentQuestionData.choiceA;
    opt1.value = currentQuestionData.choiceA;

    answerB.innerHTML = currentQuestionData.choiceB;
    opt2.value = currentQuestionData.choiceB;

    answerC.innerHTML = currentQuestionData.choiceC;
    opt3.value = currentQuestionData.choiceC;

    answerD.innerHTML = currentQuestionData.choiceD;
    opt4.value = currentQuestionData.choiceD;
}

/**
 * check if the user has made a choice 
 */
function getNextQuestion() {
    // learned "checked radiobutton" code here: https://tinyurl.com/59ddenvd
    if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
        alert("Make your choice please...");

    } else if (currentQuestion < questions.length-1) {
        scoreCounter();
        currentQuestion++;
        deselectAnswer();
        displayQuestion();

    } else {
        // learned play again button here: https://tinyurl.com/39e3f3pn
        scoreCounter();
        containerQuiz.innerHTML = `
        <h2 class="score">You scored: ${score}/${questions.length}</h2>
        <button class="playAgain" onClick="window.location.reload()">Play again!</button>
        `;
    }
}

/**
 * deselect the choice on next quetion
 */
function deselectAnswer() {
    // learned code here: https://tinyurl.com/yc5a78th
    for (i = 0; i < choice.length; i++)
    {
        choice[i].checked = false;
    }
}

/**
 * calculate the users score, get +1 for every right answer
 */
function scoreCounter() {
    let select = document.querySelector('input[type="radio"]:checked');
    let answer = select.value;
    if (questions[currentQuestion].correctAnswer === answer) {
       score++;
    }
}

