function alphabetPosition(param) {
  let ret = '';
  let str = param.toLowerCase();
  for(let i = 0;i<str.length;i++ ) {
    let index = str[i].charCodeAt(0) - 96;
    ret += index > 0 && index <= 26 ? index + " " : '';
  }
  return ret.replace(/\s?$/,'');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));


console.log(Number(""));

console.log('2' == 2) ;

let a;
console.log(a == false ? 100 : 200);

const MAX_ATTEMPTS = 10;
let attempts = 9;
let hasReachedMaxAttempts = false;
attempts++;
if(hasReachedMaxAttempts)
console.log('You have reached the max amount of attempts')
console.log(attempts);