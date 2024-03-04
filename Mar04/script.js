// console.log('THis is script.js')

let quizContent = [
  {
    'QuestionText':'1. What did you have for breakfast this morning',
    'Answer1':'Toast',
    'Answer2':'Milk',
    'Answer3':'Salad',
    'Answer4':'None of above',
  },
  {
    'QuestionText':'2. Second Question',
    'Answer1':'2 ans1',
    'Answer2':'2 ans2',
    'Answer3':'2 ans3',
    'Answer4':'2 ans4',
  },
  {
    'QuestionText':'3. Third Question',
    'Answer1':'3 ans1',
    'Answer2':'3 ans2',
    'Answer3':'3 ans3',
    'Answer4':'3 ans4',
  },
  {
    'QuestionText':'4. Fourth Question',
    'Answer1':'4 ans1',
    'Answer2':'4 ans2',
    'Answer3':'4 ans3',
    'Answer4':'4 ans4',
  }
]

// console.log(quizContent)

let quizQuestion = document.querySelector('#question');
quizQuestion.textContent = quizContent[0].QuestionText;

let answer1 = document.getElementById("answer1");
answer1.textContent = quizContent[0].Answer1;

let answer2 = document.getElementById("answer2");
answer2.textContent = quizContent[0].Answer2;

let answer3 = document.getElementById("answer3");
answer3.textContent = quizContent[0].Answer3;

let answer4 = document.getElementById("answer4");
answer4.textContent = quizContent[0].Answer4;

// let radiosValue = document.querySelector('input[name="breakfast"]:checked').value;
// var x = document.getElementById("breakfast").value;

let currentPage = 0;

let button = document.querySelector('#next-page-button');
button.addEventListener('click', function() {
  console.log('you click the button!');
  currentPage++;
  quizQuestion.textContent = quizContent[currentPage].QuestionText;
  answer1.textContent = quizContent[currentPage].Answer1;
  answer2.textContent = quizContent[currentPage].Answer2;
  answer3.textContent = quizContent[currentPage].Answer3;
  answer4.textContent = quizContent[currentPage].Answer4;
});

let button2 = document.querySelector('#get-value-button');
button2.addEventListener('click', function() {
  console.log(getRadioValue('breakfast'))
});

let myValue = 0;
let stuff = [
  'nickel','dime','quarter','loonie','toonie'
]
let array = [
  'heads','tails'
]

let addButton = document.querySelector('#add-button');
let showValue = document.getElementById("show-value");
addButton.addEventListener('click', function() {
  if (myValue >= stuff.length)
    myValue = 0;
  console.log('myValue='+ myValue);
  showValue.textContent = stuff[myValue];
  myValue += 1;
});

function getRadioValue(name) {
  var ele = document.getElementsByName(name);
  for (i = 0; i < ele.length; i++) {
      if (ele[i].checked)
          return ele[i].value;
  }
  return -1;
}


