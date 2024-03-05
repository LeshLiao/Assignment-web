// console.log('THis is script.js')

let quizContent = [
  {
    'QuestionText':'1. What did you have for breakfast this morning',
    'Answer1':'Toast',
    'Answer2':'Milk',
    'Answer3':'Salad',
    'Answer4':'None of above',
    'CorrectAnswer': 0,
  },
  {
    'QuestionText':'2. Second Question',
    'Answer1':'2 ans1',
    'Answer2':'2 ans2',
    'Answer3':'2 ans3',
    'Answer4':'2 ans4',
    'CorrectAnswer': 1,
  },
  {
    'QuestionText':'3. Third Question',
    'Answer1':'3 ans1',
    'Answer2':'3 ans2',
    'Answer3':'3 ans3',
    'Answer4':'3 ans4',
    'CorrectAnswer': 2,
  },
  {
    'QuestionText':'4. Fourth Question',
    'Answer1':'4 ans1',
    'Answer2':'4 ans2',
    'Answer3':'4 ans3',
    'Answer4':'4 ans4',
    'CorrectAnswer': 3,
  }
]

let quizQuestion = document.querySelector('#question');
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

let currentPage = 0;
let answerRadioList = [-1,-1,-1,-1];
setContent(currentPage);

let nextButton = document.querySelector('#next-button');
let prevButton = document.querySelector('#prev-button');
let quizContainer = document.getElementById('quiz');
let quizOutput = document.querySelector('#result');

// next
nextButton.addEventListener('click', function() {
  answerRadioList[currentPage] = getRadioValue('breakfast');
  clearRadio('breakfast');
  console.log(answerRadioList);
  if (currentPage < quizContent.length)
    currentPage++;
  setContent(currentPage);
  if (currentPage >= quizContent.length) {
    showResult();
  } else {
    showQuiz();
  }
});

// back
prevButton.addEventListener('click', function() {
  if (currentPage != 0)
    currentPage -= 1;
  setContent(currentPage);
  showQuiz();
  setRadioValue('breakfast',answerRadioList[currentPage]);
});

function setContent(currentPage) {
  if (currentPage < quizContent.length) {
    setRadioValue('breakfast',answerRadioList[currentPage]);
    quizQuestion.textContent = quizContent[currentPage].QuestionText;
    answer1.textContent = quizContent[currentPage].Answer1;
    answer2.textContent = quizContent[currentPage].Answer2;
    answer3.textContent = quizContent[currentPage].Answer3;
    answer4.textContent = quizContent[currentPage].Answer4;
  }
}

function getRadioValue(name) {
  var ele = document.getElementsByName(name);
  for (i = 0; i < ele.length; i++) {
      if (ele[i].checked)
          return ele[i].value;
  }
  return -1;
}

function setRadioValue(name, value) {
  clearRadio(name);
  var ele = document.getElementsByName(name);
  for (i = 0; i < ele.length; i++) {
    if (i == value) {
      ele[i].checked = true;
      break;
    }
  }
}

function clearRadio(name) {
  var ele = document.getElementsByName(name);
  for (i = 0; i < ele.length; i++) {
      ele[i].checked = false;
  }
}

function showResult() {
  quizContainer.style.display = 'none';

  let CountCorrect = 0;
  for (let i=0;i<4;i++) {
    if (answerRadioList[i] == quizContent[i].CorrectAnswer) {
      CountCorrect++;
    }
  }
  quizOutput.textContent = 'Your quiz finished!\n';
  quizOutput.textContent += 'Correct:' + CountCorrect;
}

function showQuiz() {
  quizContainer.style.display = 'block';
  quizOutput.textContent = '';
}

// ===== Coin =====

let myValue = 0;
let stuff = [
  'nickel','dime','quarter','loonie','toonie'
]
let array = [
  'heads','tails'
]

let showButton = document.querySelector('#show-button');
let showValue = document.getElementById("show-value");

showButton.addEventListener('click', function() {
  if (myValue >= stuff.length)
    myValue = 0;
  console.log('myValue='+ myValue);
  showValue.textContent = stuff[myValue];
  myValue += 1;
});