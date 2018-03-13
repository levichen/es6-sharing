// Use babel to demo converation: https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYGwhgzhAEAiD2BzaBvAUNax4DsIBcAnAV2H3kOgAocwBbAUwBpoAjQhhgEwEpUNM0fAAsAlhAB0tRtAC80aQwGYR4ie05c5bDtwEBfNANZhCAa2p90grLgjwQDCSCRUABgCFTFr-YCE0ACyAJ4K9AzQ4tAAJCiqkor6AH5JbjwGRpgEYPiiwJE4AGbwlvw22HgOTi6I7gAqYjBRXEhpmYIA9B3QHIUMHDjAEayhoJAwOPD4BdmDSuV2Vc6ubvGRMHShGtwAXDFxjeq6XPptmIb6QA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015&prettier=false&targets=&version=6.26.0&envVersion=

// Example1. Convert prototype to class

// class Dog {
//   constructor (name, breed) {
//     this.name = name
//     this.breed = breed
//   }

//   bark () {
//     console.log(`Bark Bark! My name is ${this.name}~~`)
//   }
// }

// -> Dog.prototype {
//  bark
// }

// const snickers = new Dog('Snickers', 'King Charles')
// snickers.bark()

// Example2. Add static method
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
// The method not in instance
// console.log(Array.of([1, 2, 3, 4]))
// console.log([1, 2, 3, 4].of())

// class Dog {
//   constructor (name, breed) {
//     this.name = name
//     this.breed = breed
//   }

//   bark () {
//     console.log(`Bark Bark! My name is ${this.name}~~`)
//   }

//   static info () {
//     console.log(`This is dog`)

//     // reference by class not instance
//     console.log(`this is my breed: ${this.breed}`)
//   }
// }

// const snickers = new Dog('Snickers', 'King Charles')
// snickers.bark()

// is not a function
// snickers.info()

// Dog.info()

// Example4. getter and setter
// class Dog {
//   constructor (name, breed) {
//     this.name = name
//     this.breed = breed
//   }

//   bark () {
//     console.log(`Bark Bark! My name is ${this.name}~~`)
//   }

//   static info () {
//     console.log(`This is dog`)
//   }

//   get desc () {
//     return this.description
//   }

//   set desc (d) {
//     this.description = d
//   }
// }

// const snickers = new Dog('Snickers', 'King Charles')
// snickers.desc = 'this is test'
// snickers.name = 'llll'

// console.log(snickers.desc)
// console.log(snickers.name)
