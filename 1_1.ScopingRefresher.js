// var is function scope

// example1
function setWidth () {
  var width = 100
  console.log(width)
}

setWidth()

// console.log(width)

// example2
var height
function setHeight () {
  height = 199
  console.log(height)
}

setHeight()

console.log(height)

// example3
var age = 100
if (age > 12) {
  var dogYears = age * 6
  console.log(`You are ${dogYears} dog years old!`)
}
// function scope
console.log(dogYears)

// example4
// let and const is block scope
var age1 = 100
if (age1 > 12) {
  let dogYears1 = age * 6
  console.log(`You are ${dogYears1} dog years old!`)
}
// function scope
console.log(dogYears1)
