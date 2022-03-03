const quiz = [
  {
    que: "Q1:HTML stands for -",
    a: "HighText Machine Language",
    b: "HyperText and links Markup Language",
    c: "HyperText Markup Language",
    d: "None of these",
    ans: "ans3",
  },
  {
    que: "Q2:The correct sequence of HTML tags for starting a webpage is -",
    a: "Head, Title, HTML, body",
    b: "TML, Body, Title, Head",
    c: "HTML, Head, Body, Title",
    d: "HTML, Head, Title, Body",
    ans: "ans4",
  },
  {
    que: "Q3:Which of the following element is responsible for making the text bold in HTML?",
    a: "<pre>",
    b: "<a>",
    c: "<b>",
    d: "<br>",
    ans: "ans3",
  },
  {
    que: "Q4:Which of the following tag is used for inserting the largest heading in HTML?",
    a: "<h3>",
    b: "<h1>",
    c: "<h5>",
    d: "<h6>",
    ans: "ans2",
  },
  {
    que: "Q5:Which of the following tag is used to define options in a drop-down selection list?",
    a: "<select>",
    b: "<list>",
    c: "<dropdown>",
    d: "<option>",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;

let score = 0;

const loadQuestion = () => {
  const questionList = quiz[questionCount];

  question.innerText = questionList.que;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((currAnsElem) => {
    if (currAnsElem.checked) {
      answer = currAnsElem.id;
    }
  });

  return answer;
};

const deselectAll = () => {
  answers.forEach((currAnsElem) => (currAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  //   debugger;

  if (
    questionCount < quiz.length &&
    checkedAnswer === quiz[questionCount].ans
  ) {
    score++;
  }

  questionCount++;

  deselectAll();
  //   debugger;
  if (questionCount < quiz.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
             <h3> You Scored ${score}/${quiz.length}</h3>
             <button class="btn" onclick="location.reload()">Play Again</button>
          `;
    // document.getElementById("showScore").classList.remove("scoreArea");
    showScore.classList.remove("scoreArea");
  }
});
