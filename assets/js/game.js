let quizData = [
    {
        question: "Which planet is closest to the sun?",
        choiceA: "Jupiter",
        choiceB: "Neptune",
        choiceC: "Mars",
        choiceD: "Mercury",
        correctAnswer: 4
    },
    {
        question: "The moon called Titan orbits which planet?",
        choiceA: "Saturn",
        choiceB: "Uranus",
        choiceC: "Venus",
        choiceD: "Earth",
        correctAnswer: 1
    },
    {
        question: "How old is the universe in years?",
        choiceA: "11.5 million years old",
        choiceB: "13.8 billion years old",
        choiceC: "50 billion years old",
        choiceD: "750 million years old",
        correctAnswer: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        choiceA: "Earth",
        choiceB: "Saturn",
        choiceC: "Jupiter",
        choiceD: "Neptune",
        correctAnswer: 3
    },
    {
        question: "How old is the sun?",
        choiceA: "4.6 billion years old",
        choiceB: "10.6 billion years old",
        choiceC: "4.6 million years old",
        choiceD: "10.6 million years old",
        correctAnswer: 1
    },
    {
        question: "What force bends light rays travelling through the universe?",
        choiceA: "Electromagnetism",
        choiceB: "Gravity",
        choiceC: "The Strong Nuclear Force",
        choiceD: "The Weak Nuclear Force",
        correctAnswer: 2
    },
    {
        question: "What entity boasts a gravitational pull so powerful even light cannot escape?",
        choiceA: "A neutron star",
        choiceB: "A black hole",
        choiceC: "A supergiant star",
        choiceD: "A nebula",
        correctAnswer: 2
    },
    {
        question: "What is the most common type of star found in the Milky Way?",
        choiceA: "Red dwarf stars",
        choiceB: "Protostars",
        choiceC: "White dwarf stars",
        choiceD: "Red giant stars",
        correctAnswer: 1
    },
    {
        question: "How many Earths could fit inside the sun?",
        choiceA: "350",
        choiceB: "10 000",
        choiceC: "550 000",
        choiceD: "1 300 000",
        correctAnswer: 4
    },
    {
        question: "How many planets are there in the solar system?",
        choiceA: "10",
        choiceB: "9",
        choiceC: "8",
        choiceD: "7",
        correctAnswer: 3
    },
];

let quiz = document.getElementsById(container-quiz);
let answerEls = document.querySelectorAll(".choice");
let questionEl = document.getElementById("question");
let a_text = document.getElementById("answer-a");
let b_text = document.getElementById("answer-b");
let c_text = document.getElementById("answer-c");
let d_text = document.getElementById("answer-d");
const submitBtn = document.getElementById("next-question");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    answerA.innerHTML = currentQuizData.choiceA;
    answerB.innerHTML = currentQuizData.choiceB;
    answerC.innerHTML = currentQuizData.choiceC;
    answerD.innerHTML = currentQuizData.choiceD;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            containerQuiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
