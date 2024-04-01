let inputName = document.getElementById("name");
let btn = document.getElementById("submit");

let inputContent = document.getElementById("content");

let title = document.getElementById("title");
btn.disabled = true;
function check_content() {
  console.log('val='+inputName.value);
  if(inputName.value === '') {
    btn.disabled = true;
  }else {
    btn.disabled = false;
  }
}

// btn.disabled = true;

function check_user() {
  console.log('check()')
  // btn.disabled = false;

  if(inputName.value === '') {
    btn.disabled = true;
  } else if (inputName.value === 'success') {
    btn.style.display="none";
    inputName.style.display='none';
    inputContent.innerHTML= 'THANKS YOU';
    title.style.display="none";
  } else if (inputName.value === 'error') {
    inputContent.innerHTML= 'There is a error!';
    btn.style.display="inline";
    inputName.style.display='inline';
    title.style.display="inline";
  } else {
    btn.style.display="inline";
    inputName.style.display='inline';
    title.style.display="inline";
  }
}