// http://voidcanvas.com/map-weakmap-pojo/

let dog1 = { name: 'Sinckers' }

const strong = new Map()
const weak = new WeakMap()

strong.set(dog1, 'Snickers is the best')
weak.set(dog1, 'Sunny is the 2nd best!')

console.log(strong)
console.log(weak)
// console.log(strong.has(dog1))
// console.log(weak.has(dog1))

dog1 = null

console.log(strong)
console.log(weak)
// console.log(strong.has(dog1))
// console.log(weak.has(dog1))
