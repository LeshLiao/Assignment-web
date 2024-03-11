
// foreach

// let numbers = [2,3,4]

// numbers.forEach((num) => {
//   console.log(num)
// })

// filter



// map


//every()
let arr = ['Ahomas','Tommy','Tom']
let boolValue = arr.every( (name) => {
  console.log(name)
  return name[0].toLocaleLowerCase() == 't';
})
console.log(boolValue)