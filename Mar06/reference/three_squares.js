
let squareCon = document.querySelector('#square-container');
let squareMsg1 = document.querySelector('#square-msg1');
let squareMsg2 = document.querySelector('#square-msg2');
let squareMsg3 = document.querySelector('#square-msg3');
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
addDiv();
// checkDiv();
checkDiv_1();
checkDiv_2();
checkDiv_3();

squareCon.style.display = 'grid';
squareCon.style.flexDirection = 'row';
squareCon.style.gridTemplateColumns = '1fr 1fr 1fr';
squareCon.style.width = '300px';

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
    checkDiv_1();
    checkDiv_2();
    checkDiv_3();
  }
  squareCon.appendChild(newBlockDiv);
}

function checkDiv_1() {
  var galleries = document.getElementsByClassName("blockClass");
  var len =  galleries.length;
  let countWhite = 0;
  let countGray = 0;
  for(var i=0 ; i<3; i++) {
    if( galleries[i].style.backgroundColor == 'white') {
      countWhite++;
    } else {
      countGray++;
    }
  }
  if (countWhite == 3) {
    squareMsg1.textContent = 'All white';
  } else if(countGray == 3) {
    squareMsg1.textContent = 'All Gray';
  } else {
    squareMsg1.textContent = 'Mixed';
  }
}

function checkDiv_2() {
  var galleries = document.getElementsByClassName("blockClass");
  var len =  galleries.length;
  let countWhite = 0;
  let countGray = 0;
  for(var i=3 ; i<6; i++) {
    if( galleries[i].style.backgroundColor == 'white') {
      countWhite++;
    } else {
      countGray++;
    }
  }
  if (countWhite == 3) {
    squareMsg2.textContent = 'All white';
  } else if(countGray == 3) {
    squareMsg2.textContent = 'All Gray';
  } else {
    squareMsg2.textContent = 'Mixed';
  }
}


function checkDiv_3() {
  var galleries = document.getElementsByClassName("blockClass");
  var len =  galleries.length;
  let countWhite = 0;
  let countGray = 0;
  for(var i=6 ; i<9; i++) {
    if( galleries[i].style.backgroundColor == 'white') {
      countWhite++;
    } else {
      countGray++;
    }
  }
  if (countWhite == 3) {
    squareMsg3.textContent = 'All white';
  } else if(countGray == 3) {
    squareMsg3.textContent = 'All Gray';
  } else {
    squareMsg3.textContent = 'Mixed';
  }
}