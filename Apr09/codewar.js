function getAnotherBrace(ch) {
  if (ch == ')') return "(";
  if (ch == '}') return "{";
  if (ch == ']') return "[";
}

function isLeftSideBrace(ch) {
  if (ch == '(' || ch == '{' || ch == '[') return true;
}

function validBraces(braces){
  let stack = [];
  for (let i = 0; i < braces.length; i++) {
    if (isLeftSideBrace(braces[i])) {
      stack.push(braces[i]);
    } else {
      let left = stack.pop();
      if (left !== getAnotherBrace(braces[i]))
        return false;
    }
  }
  if (stack.length > 0)
    return false;

  return true;
}

console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("(}"));
console.log(validBraces("[(])"));
console.log(validBraces("[({})](]"));
console.log(validBraces("(((({{"));

// fetch('https://fakestoreapi.com/products/categories')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products/category/electronics')
  .then(res=>res.json())
  .then(json=>console.log(json))

/*
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/