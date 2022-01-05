/*jshint esversion: 6 */
// Store questions and answers in this object array 
let questions = [
    {
        question: "Which planet is closest to the sun?",
        choiceA: "Jupiter",
        choiceB: "Neptune",
        choiceC: "Mars",
        choiceD: "Mercury",
        correctAnswer: "choiceD"
    },
    {
        question: "The moon called Titan orbits which planet?",
        choiceA: "Saturn",
        choiceB: "Uranus",
        choiceC: "Venus",
        choiceD: "Earth",
        correctAnswer: "choiceA"
    },
    {
        question: "How old is the universe in years?",
        choiceA: "11.5 million years old",
        choiceB: "13.8 billion years old",
        choiceC: "50 billion years old",
        choiceD: "750 million years old",
        correctAnswer: "choiceB"
    },
    {
        question: "What is the largest planet in our solar system?",
        choiceA: "Earth",
        choiceB: "Saturn",
        choiceC: "Jupiter",
        choiceD: "Neptune",
        correctAnswer: "choiceC"
    },
    {
        question: "How old is the sun?",
        choiceA: "4.6 billion years old",
        choiceB: "10.6 billion years old",
        choiceC: "4.6 million years old",
        choiceD: "10.6 million years old",
        correctAnswer: "choiceA"
    },
    {
        question: "What force bends light rays travelling though the universe?",
        choiceA: "Electromagnetism",
        choiceB: "Gravity",
        choiceC: "The Strong Nuclear Force",
        choiceD: "The Weak Nuclear Force",
        correctAnswer: "choiceB"
    },
    {
        question: "What entity boasts a gravitational pull so powerful even light cannot escape?",
        choiceA: "A neutron star",
        choiceB: "A black hole",
        choiceC: "A supergiant star",
        choiceD: "A nebula",
        correctAnswer: "choiceB"
    },
    {
        question: "What is the most common type of star found in the Milky Way?",
        choiceA: "Red dwarf stars",
        choiceB: "Protostars",
        choiceC: "White dwarf stars",
        choiceD: "Red giant stars",
        correctAnswer: "choiceA"
    },
    {
        question: "How many Earths could fit inside the sun?",
        choiceA: "350",
        choiceB: "10 000",
        choiceC: "550 000",
        choiceD: "1 300 000",
        correctAnswer: "choiceD"
    },
    {
        question: "How many planets are there in the solar system?",
        choiceA: "10",
        choiceB: "9",
        choiceC: "8",
        choiceD: "7",
        correctAnswer: "choiceC"
    },
];

let currentQuestion = 0;
let visibleQuestion = document.getElementById("question")

let answerA = document.getElementById("answer-a")
let answerB = document.getElementById("answer-b")
let answerC = document.getElementById("answer-c")
let answerD = document.getElementById("answer-d")



startQuiz();

function startQuiz() {
    let currentQuestionData = questions[currentQuestion];

    visibleQuestion.innerHTML = currentQuestionData.question;
    answerA.innerHTML = currentQuestionData.choiceA
    answerB.innerHTML = currentQuestionData.choiceB
    answerC.innerHTML = currentQuestionData.choiceC
    answerD.innerHTML = currentQuestionData.choiceD

    currentQuestion++;
}






let nextQuestion = document.getElementById("next-question");

nextQuestion.addEventListener("click", getNextQuestion);

function getNextQuestion() {
    console.log("Next Question Coming Up!")
}




