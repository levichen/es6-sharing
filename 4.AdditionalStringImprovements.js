const course = 'RFB3'
const filghtNumber = '20-AC2018-jz'
const accountNumber = '825242631RT0001'

const make = 'BMW'
const model = 'x5'
const colour = 'Royal Blue'

// before: indexOf
console.log(course.indexOf('RFBB'))

course.startsWith('RFB') // true

filghtNumber.startsWith('AC') // false
filghtNumber.startsWith('AC', 3) // true

accountNumber.includes('RT') // true

function leftPad (str, length = 20) {
  return `-> ${' '.repeat(length - str.length)}${str}`
}

console.log(leftPad(make))
console.log(leftPad(model))
console.log(leftPad(colour))
