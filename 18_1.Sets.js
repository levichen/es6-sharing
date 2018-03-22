// Set is unique Array, and you can not access it by index.
// because Set is not index base.

// Add, delete, clear, keys, values
// Interator

// JavaScript 原有的表示「集合」的數據結構，
// 主要是數組（Array）和對象（Object），
// ES6 又添加了Map和Set。
// 這樣就有了四種數據集合
// 這樣就需要一種統一的接口機制，來處理所有不同的數據結構。

// 一種數據結構只要部署了 Iterator 接口，我們就稱這種數據結構是「可遍歷的」（iterable）。

next () {
  value: any
  done: boolean
}


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
