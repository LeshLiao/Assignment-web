function isPunctuation(str) {
  if(str.length != 1) return false;
  var english = /^[A-Za-z0-9]*$/;
  return (!english.test(str));
}

function pigIt(str) {
  let retStr = '';
  const myArray = str.split(" ");
  for (let i =0;i<myArray.length;i++) {
    if(isPunctuation(myArray[i])) {
      retStr += myArray[i];
      continue;
    }

    if(myArray[i].length == 1)
      retStr += myArray[i] + 'ay ';
    else
      retStr += myArray[i].substring(1) + myArray[i][0] + 'ay '
  }
  return retStr.trim();
}

console.log(pigIt('Pig latin is cool'));  // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !


