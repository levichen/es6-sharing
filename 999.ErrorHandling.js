
function breathe (amount) {
  return new Promise((resolve, reject) => {
    if (amount < 500) {
      reject('That is too small of a value')
    }
    setTimeout(() => resolve(`Done for ${amount} ms`), amount)
  })
}

// example1
async function go () {
  console.log(`start`)
  const res = await breathe(1000)
  console.log(res)
  const res2 = await breathe(300)
  console.log(res2)
  const res3 = await breathe(750)
  console.log(res3)
  const res4 = await breathe(900)
  console.log(res4)
  console.log('end')
}

go()

// Example2
// async function go () {
//   try {
//     console.log(`start`)
//     const res = await breathe(1000)
//     console.log(res)
//     const res2 = await breathe(300)
//     console.log(res2)
//     const res3 = await breathe(750)
//     console.log(res3)
//     const res4 = await breathe(900)
//     console.log(res4)
//     console.log('end')
//   } catch (error) {
//     console.error('Ohhhh nooo!!!!!')
//     console.error(error)
//   }
// }

// go()

// Example 4
// function catchErrors (fn) {
//   return function (...args) {
//     return fn(...args).catch((err) => {
//       console.error('Ohhhh nooo!!!!!')
//       console.error(err)
//     })
//   }
// }
// async function go (name, last) {
//   console.log(`Starting for ${name} ${last}!`)
//   const res = await breathe(1000)
//   console.log(res)
//   const res2 = await breathe(300)
//   console.log(res2)
//   const res3 = await breathe(750)
//   console.log(res3)
//   const res4 = await breathe(900)
//   console.log(res4)
//   console.log('end')
// }
// const wrappedFunction = catchErrors(go)
// wrappedFunction('Wes', 'Bos')
