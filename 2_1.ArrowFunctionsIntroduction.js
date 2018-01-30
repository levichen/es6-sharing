const names = ['wes', 'kait', 'lux']

const fullNames = names.map(function (name) {
  return `${name} bos`
})

const fullNames2 = names.map((name) => {
  return `${name} bos`
})

const fullNames3 = names.map(name => {
  return `${name} bos`
})

const fullNames4 = names.map(name => `${name} bos`)

const fullNames5 = names.map(() => `cool bos`)

console.log(fullNames5)

// arrow function is anonymous function

// this is name function
function sayHello (name) {
  return `Hello ${name}`
}

// you can re-write it with arrow function way
let sayHello2 = (name) => { return `Hello ${name}` }
console.log(sayHello2('levi'))
