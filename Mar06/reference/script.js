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
nextButton.addEventListener('click', () => {
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
prevButton.addEventListener('click', () => {
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


// ===========================================

// function setUpHtml(divElement, yourFunction) {
//   for (let element of divElement) {
//     element.addEventListener('click', yourFunction);
//   }
// }

// setUpHtml(document.querySelectorAll('p'), () => {
//   console.log('click');
// });

// function doMath(a, b, yourFunc) {
//   return yourFunc(a,b);
// }

// console.log(doMath(12, 24, function(a,b) {
//   return a+b;
// }));

// console.log(doMath(12, 24, (a,b) => {
//   return a+b;
// }));

// function ask(question, yes, no) {
//   if(confirm(question)) yes();
//   else no();
// }

// ask(
//   "do you agree?",
//   () => {
//     alert('You agreed');
//   },
//   () => {
//     alert('You canceled the execution');
//   }
// );


// function appendLala(str,func) {
//   if (str.length > 2) {

//   }
// }

// appendLala("Chocolate", function(a) {
//   return a + "lala";
// })

// let arr = [3, 4.1 , -5, 6];

// console.log(arr.filter(function(yourVar){
//   if (Number.isInteger(yourVar) && yourVar > 0) {
//     return true;
//   return false;
//   }
// }))

// let str = 'abc';
// let ret = str.split('').filter(s => true);
// console.log(ret);
// let myArray = [100, 200, 300, 425, 555, 777];
// console.log(myArray.filter(s => s == 425));
// // console.log(myArray.filter(s => s[0] == 'p'));

// let strArray = ['div','p','span','input'];
// console.log(strArray.filter(s => s.length < 5));


// function yourFunction(personName, greeting = 'See you') {
//   console.log(`${greeting} ${personName}`);
// }


// function printStr(...args) {
//   for (let i = 0;i< args.length;i++) {
//     console.log(args[i]);
//   }
// }

// printStr('abc','123','catdog');

// const variable1 = ['vampire','undead','ghost'];
// let variable2 = variable1;
// const variable3 = [...variable1];

// variable1[0] = 'bat';

// console.log(variable1);
// console.log(variable2);
// console.log(variable3);

// const webSite = [{ name: 'google.com'},{name:'netflix.com'}];
// let varAnother = webSite;
// webSite[1]['name'] = 'unsplash.com';

// console.log(webSite);
// console.log(varAnother);

// let voxel = {x:3.6, y:7.4, z:6.54};
// const {x:a, y:b, z:c} = voxel;
// console.log(a);
// console.log(b);
// console.log(c);


// let chair = {
//   legs: 4,
//   color:'white',
//   style:'sleek'
// }

// const {color: chairColor} = chair;
// console.log(chairColor)

// const AVG_TEMPERATURES = {
//   today: 77.5,
//   tomorrow: 80
// };

// function getTempOfTmrw(avgTemperatures) {
//   // const {today:a,tomorrow:b} =avgTemperatures;
//   const { tomorrow } = avgTemperatures;
//   const tempOfTomorrow = tomorrow;
//   return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// let user = {name: 'John', years: 30};

// const {name: myName, years: age , isAdmin = false} = user;

// alert(myName);
// alert(age);
// alert(isAdmin);

let inputBox = document.querySelector('#todo-input');
let submitBtn = document.querySelector('#submit-button');
let taskList = document.querySelector('#task-list');
let errorMsg = document.querySelector('#error-msg');
let errorBlock = document.querySelector('#error-block');

// console.log(input);
// console.log(submitBtn);

let taskContent = '';
errorBlock.style.display = 'none';

submitBtn.addEventListener('click' , function() {
  if (!inputBox.value) {
    // alert('Please type your task!');
    // errorMsg.textContent = 'You have not insert anything!';
    errorBlock.style.display = 'block';
    return;
  }
  insertTask();
  inputBox.value = "";
  // errorMsg.textContent = '';
  errorBlock.style.display = 'none';
})

function insertTask() {
  let newTaskDiv = document.createElement('div');
  newTaskDiv.textContent = inputBox.value;

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newTaskDiv.prepend(checkbox);

  newTaskDiv.onclick = function() {
    if (newTaskDiv.getAttribute('isdone') === null) {
      newTaskDiv.setAttribute('isdone', 'true');
    }
  }
  taskList.appendChild(newTaskDiv);
}

inputBox.onkeydown = function(e) {
  console.log(e.key)
  if (e.key == "Enter") {
    submitBtn.click();
  }
}

// inputBox.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     submitBtn.click();
//   }
// });









/* //======================================

let squareCon = document.querySelector('#square-container');
let squareMsg = document.querySelector('#square-msg');
addDiv();
addDiv();
addDiv();
checkDiv();

function addDiv() {
  let newBlockDiv = document.createElement('div');
  newBlockDiv.style.height = "100px";
  newBlockDiv.style.width = "100px";
  newBlockDiv.style.border = "1px solid black";
  newBlockDiv.classList.add('blockClass');
  newBlockDiv.style.backgroundColor = 'white';
  newBlockDiv.onclick = function() {
    if (newBlockDiv.style.backgroundColor == 'gray') {
      newBlockDiv.style.backgroundColor = 'white';
    } else {
      newBlockDiv.style.backgroundColor = 'gray';
    }
    checkDiv();
  }
  squareCon.appendChild(newBlockDiv);
}

function checkDiv() {
  var galleries = document.getElementsByClassName("blockClass");
  var len =  galleries.length;
  let countWhite = 0;
  let countGray = 0;
  for(var i=0 ; i<len; i++){
    if( galleries[i].style.backgroundColor == 'white') {
      countWhite++;
    } else {
      countGray++;
    }
  }
  if (countWhite == 3) {
    squareMsg.textContent = 'All white';
  } else if(countGray == 3) {
    squareMsg.textContent = 'All Gray';
  } else {
    squareMsg.textContent = 'Mixed';
  }
}
//=================================  */


// let myArray = ['google.com','yahoo.com','amazon.com'];
// myArray = myArray.filter(web => web[0] != 'g');
// console.log(myArray)

// let firstName = "Elon";
// let lastName = "Musk";
// let myString = `${firstName} ${lastName} is here.`;
// console.log(myString)

// const result = {
//   success: ["max-length","no-amd","prefer-arrow-functions"],
//   failure: ["no-var","var-on-top","linebreak"],
//   skipped: ["id-blacklist","no-dup-keys"]
// }

// function makeList (arr) {
//   let resultDisplayArray = [];
//   for (let i = 0;i<arr.length;i++) {
//     resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
//   }
//   return resultDisplayArray;
// }

// console.log(makeList(result.failure));

// ==========================================
// let animals = [1,2,3,4];


// function countSheep() {
//   return animals.map(ele => ele + ' sheep')
// }

// function output() {
//   return animals.map(ele => ele*2 )
// }

// console.log(countSheep())
// console.log(output())

