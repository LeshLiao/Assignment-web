
// foreach()

// let numbers = [2,3,4]

// numbers.forEach((num) => {
//   console.log(num)
// })

// filter()



// map()




//every()
let arr = ['Ahomas','Tommy','Tom']
let boolValue = arr.every( (name) => {
  // console.log(name)
  return name[0].toLocaleLowerCase() == 't';
})
// console.log(boolValue)


let test = fetch('https://reqres.in/api/users');
// console.log(test)


// reduce()
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 5;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// console.log(sumWithInitial);

const colorArr = ['red','blue','green'];
const sum = colorArr.reduce(
  (len, ele) => len + ele.length,
  0,
);
console.log(sum)

