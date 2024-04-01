let squares = document.querySelectorAll('.square');
let status1 = document.getElementById('status1');
let status2 = document.getElementById('status2');
let status3 = document.getElementById('status3');

console.log(squares);

for(let i=1;i< squares.length+1;i++){
    console.log(document.querySelector('#square'+i));
    document.querySelector('#square' + i).style.backgroundColor = 'white';
    document.querySelector('#square'+i).addEventListener('click', () => {
        if(document.querySelector('#square' + i).style.backgroundColor ==='white'){
            document.querySelector('#square' + i).style.backgroundColor = 'gray';
        }else{
            document.querySelector('#square' + i).style.backgroundColor = 'white';
        }
        updateStatus(0,3,status1);
        updateStatus(3,6,status2);
        updateStatus(6,9,status3);
    });

}

updateStatus(0,3,status1);
updateStatus(3,6,status2);
updateStatus(6,9,status3);

function updateStatus(begin,end,result) {
  let white =0;
  let gray =0;
  for(let i=begin; i<end;i++){
    console.log(squares[i].style.backgroundColor);
    if(squares[i].style.backgroundColor == 'gray'){
        gray++;
    }else if(squares[i].style.backgroundColor =='white'){
        white++;
    }
  }
  if(white == 3) {
    result.textContent = 'All white';
  }
  else if(gray ==3){
    result.textContent = 'All gray';
  }
  else{
    result.textContent = 'Mixed';
  }
}