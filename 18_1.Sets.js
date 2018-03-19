// Set is unique Array, and you can not access it by index.
// because Set is not index base.

const people = new Set()
people.add('wes')
people.add('Kait')
people.add('Peter')

// list people
console.log(people)

// Interator
console.log(people.values())

const it = people.values()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (const person of people) {
  console.log(person)
}

// put array
const students = new Set(['Wes', 'Marry', 'Tony'])
console.log(students)

const dogs = ['Snickers', 'Sunny']
const dogSet = new Set(dogs)
console.log(dogSet)

// use has to check if exist
console.log(dogSet.has('Sunny'))
console.log(dogSet.has('Sunyyyyyy'))

dogSet.add('Sunny')
dogSet.add('Sunny')
dogSet.add('Sunny')
dogSet.add('Sunny')
dogSet.add('Sunny')
console.log(dogSet)

dogSet.delete('Sunny')
console.log(dogSet)
dogSet.clear()
console.log(dogSet)
