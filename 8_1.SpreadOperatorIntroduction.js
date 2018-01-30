
const featured = ['Deep Dish', 'Peperoni', 'Hawaiian']
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita']

// how do you contact these two arraies?
const pizzas1 = featured.concat(specialty)

console.log(pizzas1)

/***/

// but what if you want to insert an element inside the new array?
let pizzas2 = [].concat(featured)
pizzas2.push('something')
pizzas2 = pizzas2.concat(specialty)
// console.log(pizzas2)

/***/

// the spread operator
// split string to char
const name = [...'levi']
console.log(name)

/***/

// so how do you contact these two arrayies in more effecat way?
let pazzas3 = [...featured, 'something', ...specialty]
console.log(pazzas3)

// use sperate operator to do 'true copy'
