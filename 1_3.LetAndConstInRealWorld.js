
// example1
// {
//   const name = 'Levi'
//   console.log(name)
// }
// console.log(name)

// example2
// for (var i = 0; i < 10; i = i + 1) {
//   console.log(i)
// }

// console.log(`this is end: ${i}`)

// example3
// for (var i = 0; i < 10; i = i + 1) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
// }

// example4
// for (let index = 0; index < 10; index = index + 1) {
//   console.log(index)
// }

// console.log(`this is end: ${index}`)

// example5
for (let i = 0; i < 10; i = i + 1) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}
