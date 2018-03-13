
// Example1.
// function Dog is constructor
// function Dog (name, breed) {
//   this.name = name
//   this.breed = breed
// }

// const snickers = new Dog('Snickers', 'King Charles')
// console.log(snickers.name)
// console.log(snickers)

// Example2. What is prototype?
// const names = ['peter', 'john']
// console.log(names.join(''))
// console.log(names.pop())
// console.log(Object.getOwnPropertyNames(Array.prototype))

// Example3. prototype example

function Dog (name, breed) {
  // this is for instance
  this.name = name
  this.breed = breed
}

Dog.prototype.bark = function () {
  console.log(`Bark Bark! My name is ${this.name}~~`)
}

const snickers = new Dog('Snickers', 'King Charles')
const cDog = new Dog('CDog', 'CDog')

// Example4
// even if you create the prototype method after new instance
// it is still avariable
Dog.prototype.bark = function () {
  console.log(`Bark Bark! My name is ${this.name}~~ and I am ${this.breed}`)
}

snickers.bark()
cDog.bark()
