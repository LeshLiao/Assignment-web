let inputBox = document.querySelector('#todo-input');
let submitBtn = document.querySelector('#submit-button');
let clearBtn = document.querySelector('#clear-button');
let taskList = document.querySelector('#task-list');

submitBtn.addEventListener('click' , function() {
  if (!inputBox.value) {
    return;
  }
  insertTask();
  inputBox.value = "";
})

clearBtn.addEventListener('click' , function() {
  taskList.innerHTML = "";
})

function insertTask() {
  let newTaskDiv = document.createElement('div');
  newTaskDiv.style.height = "200px";
  newTaskDiv.style.width = "200px";
  newTaskDiv.style.border = "1px solid black";
  newTaskDiv.style.wordBreak = 'break-word';
  newTaskDiv.textContent = inputBox.value;

  taskList.innerHTML = "";
  taskList.appendChild(newTaskDiv);
}

inputBox.onkeydown = function(e) {
  if (e.key == "Enter") {
    submitBtn.click();
  }
}