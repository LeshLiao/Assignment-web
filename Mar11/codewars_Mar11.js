function count(string) {
  const map1 = new Map();
  Array.from(string).forEach(ch => {
    if (map1.get(ch)) {
      map1.set(ch, map1.get(ch) + 1);
    } else {
      map1.set(ch, 1);
    }
  });
  return Object.fromEntries(map1);
}

console.log(count("aba"))

function findOdd(A) {
  const map1 = new Map();
  for(let i = 0;i<A.length;i++) {
    if (map1.get(A[i])) {
      map1.set(A[i], map1.get(A[i]) + 1);
    } else {
      map1.set(A[i], 1);
    }
  }
  for (let [key, value] of map1) {
    console.log(key + " is " + value);
    if (value % 2 == 1)
      return key;
  }
}

console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1,1,2]))
console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))


function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
