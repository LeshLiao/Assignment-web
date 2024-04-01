let questionNumber = 1;
function LineBreakkkk(){
	console.log(`\r\n-------------\r\n${questionNumber}\r\n`);
	questionNumber += 1;
}

// Author: Levi Liao

/*
  Last Edited: Feb 21 2024
  Last Edited By: Levi Liao
  Version: v1.0
*/

var yesterday = 22;
console.log(yesterday);

let today = 23;
console.log(today);

const tomorrow = 24;
console.log(tomorrow);

LineBreakkkk();
console.log("Yesterday was " + yesterday +".\nToday is " + today + ".\nTomorrow is " + tomorrow + ".");

LineBreakkkk();
console.log('<a href="https://www.google.com/search?q=today+news+canada">today news canada</a>');

LineBreakkkk();

let history = []

function your_function1(param) {
  history.push(param);
  console.log("Logged " + JSON.stringify(history));
  if (param != "admin" && param != "Thomas") {
    console.log('WARING - INTRUDER - ' + param);
  }
}

function your_function2() {
  history.pop();
}

your_function1('Thomas');
your_function1('admin');
your_function1('Thomas');
your_function1('Rocky');
your_function2();
console.log(history);

LineBreakkkk();

function getOneNumber(num) {
  let arr = ['single','double','triple','quadruple'];
  if (num > 0 && num <= arr.length)
    return arr[num-1];
  return 'Invalid value!';
}

console.log(getOneNumber(1));
console.log(getOneNumber(2));
console.log(getOneNumber(3));
console.log(getOneNumber(4));

LineBreakkkk();

let myObject = {
  'Nestor_Makhno':
  [
    {
      'name': 'Nastia Vasetskaia',
      'years': '(1917-1918)'
    },
    {
      'name': 'Halyna Kuzmenko',
      'years': '1918-1934'
    },
    {
      'name': 'Nastia Vasetskaia',
      'years': '1922-1993'
    }
  ]
}

console.log(myObject);

LineBreakkkk();















// let num = [3,1,2];

// console.log(num[1]);
// console.log(num[2]);
// console.log(num[0]);

// num[1] = 9000;
// console.log(num[1]);

// ==================

// var outArray = ["something", "J", "cat"];
// outArray.push(['happy','joy']);

// console.log(outArray);

// var myArray = [['John',23], ['cat', 2]];

// myArray.push(['owl',3]);

// console.log(myArray);

// let bottle = ['water','plastic','cap'];

// bottle.pop();
// bottle.push('drink');
// console.log(bottle);

// ===

// let bottle = ['1', '2', '3'];
// let soda = ['pepsi', 'metal', 'tab'];

// function popAndDrink(x) {
//   x.pop();
//   x.push('drink');
//   console.log(x);
// }

// popAndDrink(bottle);
// popAndDrink(soda);


// ================

// function abc() {
//   console.log("------------");
// }

// abc();
// console.log("Hello there");
// abc();


// ==============

// function highlight_word(x) {
//   console.log("--- " + x + " ---")
// }

// highlight_word('Thomas');

// ==========

// let a = "Chocolate";

// function sayIceCream() {
//   let a = 'b';
//   console.log(b);
// }

// ==========

// let counter = 0;

// function add() {
//   console.log(++counter);
// }

// add();
// add();
// add();

// ==========

// let testArr = [1,2,3,4,5];

// function nextInLine(arr, item) {
//   arr.push(item);
//   return item;
// }

// console.log("Before:" + JSON.stringify(testArr));
// nextInLine(testArr, 6);
// console.log(testArr);

// ==========

// function fun(bool) {
//   if (bool) {
//     console.log('This code did run.');
//   } else {
//     console.log('The parameter is actually false so the true code did not run.');
//   }
// }

// fun(true);
// fun(false);


// ==========


// function fun(val1, val2) {
//   return val1 === val2;
// }

// console.log(fun(2,2));

// let history = []

// function your_function1(param) {
//   history.push(param);
//   console.log("Logged " + JSON.stringify(history));
//   if (param != "admin" && param != "Thomas") {
//     console.log('WARING - INTRUDER - ' + param);
//   }
// }

// function your_function2() {
//   history.pop();
// }

// your_function1('Thomas');
// your_function1('admin');
// your_function1('Thomas');
// your_function1('Rocky');
// your_function2();
// console.log(history);