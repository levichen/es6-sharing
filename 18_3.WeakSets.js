
let dog1 = { name: 'Snickers', age: 3 }
let dog2 = { name: 'Sunny', age: 1 }

const weakSauce = new WeakSet([dog1, dog2])

// for (const dog of weakSauce) {
//   console.log(dog)
// }

// weakSauce.clear()

// clean automatlly when gc
console.log(weakSauce.has(dog1))
// dog1 = null
