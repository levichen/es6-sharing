const firstName = 'Levi'
const lastName = 'Chen'

// Before Template String
const mStr = 'today is a nice day.My first name is ' + firstName + ' and last name is ' + lastName + '. '

// Template String
const mStr1 = `today is a nice day. My first name is ${firstName} andlast name is ${lastName}.`

// Template Sring for mutiple line
const mStr2 = `today is a nice day.
My first name is ${firstName} and
last name is ${lastName}. `

console.log(mStr)
console.log(mStr1)
console.log(mStr2)
