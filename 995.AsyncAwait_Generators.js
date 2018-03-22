
// example1
// function * listPeople () {
//   yield 'Wes'
//   yield 'Kaite'
//   yield 'Peter'
// }

// const people = listPeople()

// console.log(people.next().value)
// console.log(people.next())
// console.log(people.next())
// console.log(people.next())

// Example2
// function * listPeople () {
//   let i = 0
//   yield i
//   i++
//   yield i
//   i++
//   yield i
// }

// const people = listPeople()

// console.log(people.next().value)
// console.log(people.next())
// console.log(people.next())
// console.log(people.next())

// Example3
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879 },
  { first: 'Isaac', last: 'Newton', year: 1643 },
  { first: 'Galileo', last: 'Galilei', year: 1564 },
  { first: 'Marie', last: 'Curie', year: 1867 },
  { first: 'Johannes', last: 'Kepler', year: 1571 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
  { first: 'Max', last: 'Planck', year: 1858 }
]

function * loop (arr) {
  // step1.
  console.log(arr)
  for (const item of arr) {
    yield JSON.stringify(item)
  }
}

const inventor = loop(inventors)

console.log(inventor.next())
console.log(inventor.next().value)
