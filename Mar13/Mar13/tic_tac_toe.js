console.log('tic_tac_toe.js ')

let squareCon = document.querySelector('#square-container');

initSquare();
function initSquare() {
  for (let i = 0;i<9;i++) {
    addDiv();
  }
  squareCon.style.display = 'grid';
  squareCon.style.flexDirection = 'row';
  squareCon.style.gridTemplateColumns = '1fr 1fr 1fr';
  squareCon.style.width = '300px';
}

let currentStatus = 'X'; //global var
let afterWin = false;
const container = document.querySelector('.outer')
const fireworks = new Fireworks.default(container)

function addDiv() {
  let newBlockDiv = document.createElement('div');
  newBlockDiv.style.height = "100px";
  newBlockDiv.style.width = "100px";
  newBlockDiv.style.border = "1px solid black";
  newBlockDiv.classList.add('blockClass');
  newBlockDiv.style.backgroundColor = 'white';
  newBlockDiv.style.fontSize = '3rem';
  newBlockDiv.style.textAlign = 'center';
  newBlockDiv.textContent = '';
  newBlockDiv.onclick = function() {
    putIconToDiv(newBlockDiv);
    checkWinCondition();
  }
  squareCon.appendChild(newBlockDiv);
}

function putIconToDiv(div) {
  if(afterWin) return;

  if (currentStatus === 'O') {
    if (div.textContent == '') {
      div.textContent = 'X';
      currentStatus = 'X';
    }
  } else if (currentStatus === 'X') {
    if (div.textContent == ''){
      div.textContent = 'O';
      currentStatus = 'O';
    }
  }
}

function clearAll() {
  var galleries = document.getElementsByClassName("blockClass");
  afterWin = false;
  fireworks.stop()
  for(var i=0 ; i<galleries.length; i++) {
    galleries[i].textContent = '';
    galleries[i].style.color = 'black';
  }
  document.querySelector('#game-result').innerHTML = '';
}

function checkWinCondition() {
  if(afterWin) return;

  checkOneLine(1,2,3);
  checkOneLine(4,5,6);
  checkOneLine(7,8,9);
  checkOneLine(0,3,6);
  checkOneLine(1,4,7);
  checkOneLine(2,5,8);
  checkOneLine(0,4,8);
  checkOneLine(2,4,6);
}

function checkOneLine(a,b,c) {
  var ele = document.getElementsByClassName("blockClass");
  if (ele[a].textContent == ele[b].textContent &&
      ele[b].textContent == ele[c].textContent &&
      ele[c].textContent == ele[a].textContent &&
      (ele[a].textContent != '' ||
      ele[b].textContent != '' ||
      ele[c].textContent != '' )) {
        let wonMsg = ele[b].textContent + " won!";
        document.querySelector('#game-result').innerHTML = wonMsg;

        ele[a].style.color = 'red';
        ele[b].style.color = 'red';
        ele[c].style.color = 'red';
        afterWin = true;
        fireworks.start()
        setTimeout("alert('"+ wonMsg + "');", 1);
  }
}

