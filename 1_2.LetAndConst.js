
// exmple1, using let
let points = 50
let winner = false
if (points > 40) {
  console.log('hi')
  let winner = true
}

console.log(winner)

// exmple2, using var
let points1 = 50
var winner1 = false
if (points1 > 40) {
  console.log('hi')
  var winner1 = true
}

console.log(winner1)

// example3. const
// const can not be change

// example4
const person = {
  name: 'Wes',
  age: 28
}

// not work
// person = { name: 'levi'}

// for changing property is work
person.age = 20
console.log(person)

// use Object.freeze() to freeze object
