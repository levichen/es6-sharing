// http://voidcanvas.com/es6-set-vs-weakset-vs-array/

let dog1 = { name: 'Snickers', age: 3 }
let dog2 = { name: 'Sunny', age: 1 }
let dog3 = 123

const weakSauce = new WeakSet([dog1, dog2])
const strongSauce = new Set([dog3])

// weak set is not interator
// for (const dog of weakSauce) {
//   console.log(dog)
// }

// do not support
// weakSauce.clear()

// clean automatlly when gc
console.log(weakSauce.has(dog1))
console.log(strongSauce.has(dog3))

dog1 = null
dog3 = null

console.log(weakSauce.has(dog1))
console.log(strongSauce.has(dog3))
