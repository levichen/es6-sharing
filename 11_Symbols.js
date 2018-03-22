// ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。
// 它是 JavaScript 语言的第七种数据类型，前六种是：
  // undefined, null, Boolean, String, Number, Object

// 1. type of
// let s = Symbol()
// console.log(typeof s)

// 2. the uniue value
// let s1 = Symbol('foo')
// let s2 = Symbol('bar')
// let s3 = Symbol('foo')

// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(s1 === s3)
// console.log(s1 == s3)

// 3. can not contact with other value
// let s = Symbol('foo')
// console.log(`this is string ${s}`)

// 4. as property
// let sym = Symbol()

// let a = {
//   [sym]: 'this is symbol'
// }

// console.log(a)
// console.log(a[sym])

// 5. Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。
// let log = {}
// log.levels = {
//   DEBUG: Symbol('debug'),
//   INFO: Symbol('info'),
//   WARN: Symbol('warn')
// }
// console.log(log.levels.DEBUG, 'debug message')
// console.log(log.levels.INFO, 'info message')

// 6. Go though all of element
// can not use for in/for of
// const obj = {}
// let a = Symbol('a')
// let b = Symbol('b')

// obj[a] = 'Hello'
// obj[b] = 'World'

// for (let e in obj) {
//   console.log(e)
// }

// for (let o of obj) {
//   console.log(o)
// }

// const objectSymbols = Object.getOwnPropertySymbols(obj)

// console.log(objectSymbols)
