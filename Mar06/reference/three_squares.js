
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