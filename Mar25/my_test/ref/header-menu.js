
// let p0 = document.querySelectorAll("p");
// p0[0].style.color = "red";
// p0[1].style.backgroundColor = "yellow";

// let first = document.querySelectorAll("p")[0];
// let second = document.querySelectorAll("p")[1];

// second.addEventListener("click", myFunction);

// function myFunction() {
//   first.style.fontWeight = 'bold';
// }

// console.log('Hi, this is javascript lesson');

// let person = {
//   firstName: 'Ttt',
//   // middleName: 'Mm',
//   lastName: "Lll"
// }

// // console.log(`${person.firstName} ${person.middleName || ""} ${person.lastName}`)
// console.log(`${person.firstName}${person.middleName ? (' ' + person.middleName) : ''} ${person.lastName}`);
// // console.log(`${person.firstName} ${person.middleName || ""} ${person.lastName}`.replace(/\s{2,}/g, " "))

// ==========

// function func(num, arr) {
//   let i = 0;
//   while (i != num && i < arr.length) {
//     console.log(arr[i]);
//     i++;
//   }
// }

// func(8, ['a', 'b', 'c', 'd', 'e', 'f']);

// ==========

// let buttons = document.querySelectorAll('button');

// buttons[0].style.color = 'red';


// for(let i=25;i<= 35;i+=2) {
//   console.log(i)
// }





// let arr = ['','','','',''];

// function your_func(index, arr) {
//   for (let i= 0;i<arr.length;i++) {
//     arr[i] = '';
//     if (index == i)
//       arr[index] = 'active';
//   }
// }

// your_func(1,arr);
// console.log(arr);

// your_func(0,arr);
// console.log(arr);


// function your_function(arr) {
//   let sum = 0;
//   for(let i = 0;i<arr.length;i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(your_function([3,12]));
// console.log(your_function([3,12,3,6,24]));


// let ret = [];

// function multiplyAll(arr) {
//   for(let i=0;i<arr.length;i++) {
//     let sum = 1;
//     for(let j=0;j<arr[i].length;j++) {
//       sum = sum * arr[i][j];
//     }
//     ret.push(sum);
//   }
//   return ret;
// }

// let product = multiplyAll([[1,2],[3,4],[5,6,7]]);
// console.log(product);

// let myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];

// function func(arr) {
//   for(let i=0;i<arr.length;i++) {
//     for(let j=0;j<arr[i].length;j++) {
//       if (i == 1 && j == 1) {
//         arr[i][j] = 99;
//       }
//     }
//   }
// }

// func(myArray);
// console.log(myArray);

// function your_function(str) {
//   let temp = ''
//   for(let i=0;i<str.length;i++) {
//     if (str[i].toLowerCase() == 'a'.toLowerCase()) {
//       temp += 'x';
//     } else {
//       temp += str[i];
//     }
//   }
//   return temp;
// }

// let str1 = your_function('Backyard');
// let str2 = your_function('Vampire');
// console.log(str1);
// console.log(str2);

// ======================

// let addressbook = [
//   {
//     firstName: 'Thomas',
//     lastName: 'Ngo',
//     email: 'thgo@tamwoodonline.com',
//     likes: ['indie games','board games','TikTok']
//   },
//   {
//     firstName: 'James',
//     lastName: 'Bond',
//     email: 'jbond@secret.com',
//     likes: ['high stealth missions','high risk','high reward']
//   }
// ]

// function lookUp(personName, detail) {
//   for (let i=0; i< addressbook.length;i++) {
//     if (addressbook[i].firstName === personName) {
//       return addressbook[i][detail] || "Not found!";
//     }
//   }
// }

// console.log(lookUp('Thomas','likes'));
// console.log(lookUp('James','email'));
// let ran = Math.floor(Math.random() * 6) + 1;
// console.log(ran);

// let inputUser = document.querySelector("#lookupuser");
// let inputProp = document.querySelector("#lookupprop");
// let myButton = document.querySelector("button");
// let output = document.querySelector('#result');

// function myFunction() {
//   output.innerHTML=lookUp(inputUser.value, inputProp.value);
// }

// myButton.addEventListener('click',myFunction);

// function addFunction() {
//   let sum = parseInt(num1.value) + parseInt(num2.value);
//   result_sum.innerHTML=sum;
// }

// let num1 = document.querySelector("#num1");
// let num2 = document.querySelector("#num2");
// let addButton = document.querySelector("#button1");

// addButton.addEventListener('click',addFunction);

// function func(num, str) {
//   return num + " " + (num == 1 ? str : str + 's' );
// }

// console.log(func(0,'bird'));
// console.log(func(1,'bird'));
// console.log(func(2,'bird'));

// console.log(num1.value ? "In Use" : "Not In Use");


// Feb28
// "use strict";//

// let clickMeButton = document.querySelector('#btn-header');
// let menu = document.querySelector('#popup-menu');

// // menu.style.display = 'none';

// clickMeButton.addEventListener('click', (event) => {
//   console.log('click "Click Me"');
//   // console.log(event)

//   if (menu.classList.contains('hidden')) {
//     // menu.style.display = 'block';
//     menu.classList.remove('hidden');
//   } else {
//     // menu.style.display = 'none';
//     menu.classList.add('hidden');
//   }
// })

// document.addEventListener


// let myPage = document.querySelector('#my_page');
// let buttonHide = document.querySelector('#btn-hide');
// let buttonReveal = document.querySelector('#btn-reveal');
// let buttonClick = document.querySelector('#btn-hide-click-me');

// buttonHide.addEventListener('click', function() {
//   myPage.style.display = 'none';
// })

// buttonReveal.addEventListener('click', function() {
//   myPage.style.display = 'block';
// })

// buttonClick.addEventListener('click', function() {
//   clickMeButton.style.display = 'none';
// })



// let buttonHideAll = document.querySelector('#btn-hide-all');

// let allButtons = document.querySelectorAll('#popup-menu > ul > li > button');

// buttonHideAll.addEventListener('click', function() {
//   // clickMeButton.style.display = 'none';
//   for (let i = 0;i<3;i++) {
//     allButtons[i].style.display = 'none';
//   }
// })
// let a = document.createElement("a");
// a.innerHTML = "GO BACK";
// document.body.append(a);
// console.log('hi');

let b = `<br/><a href="index.html">Go back</a>`
let c = `<br/><a href="exercise.html">Go Ex</a>`

// document.body.append(b);
document.body.insertAdjacentHTML('beforeend', b);
document.body.insertAdjacentHTML('beforeend', c);
