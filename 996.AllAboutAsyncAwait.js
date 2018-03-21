// await only in async function
// most return promise

function breathe (amount) {
  return new Promise((resolve, reject) => {
    if (amount < 500) {
      reject('That is too small of a value')
    }
    setTimeout(() => resolve(`Done for ${amount} ms`), amount)
  })
}

// example1
// await breathe(1000)

// example2
// async function go () {
//   console.log('start')
//   await breathe(1000)
//   console.log('end')
// }

// go()

// example3
// async function go () {
//   console.log('start')
//   const c1 = await breathe(5000)
//   console.log(c1)
//   const c2 = await breathe(1000)
//   console.log(c2)
//   console.log('end')
// }

// go()

// example4
// async function go () {
//   console.log('start')
//   setTimeout(() => {
//     console.log('11111')
//   }, 1000)
//   const c1 = await breathe(10000)
//   setTimeout(() => {
//     console.log('2222')
//   }, 1000)
//   console.log(c1)
//   const c2 = await breathe(1000)
//   console.log(c2)
//   console.log('end')
// }

// go()
// console.log('hihihihi')
// setTimeout(() => {
//   console.log('oooooo')
// }, 1000)
