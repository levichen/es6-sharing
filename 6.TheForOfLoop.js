
Array.prototype.shuffle = function () {
  var i = this.length
  var j
  var temp

  if (i === 0) return this
  while (--i) {
    j = Math.floor(Math.random() * (i + 1))
    temp = this[i]
    this[i] = this[j]
    this[j] = temp
  }

  return this
}

const cuts = ['Chunk', 'Brisket', 'Shank', 'Short Rib']

// for (let index = 0; index < cuts.length; index++) {
//   const cut = cuts[index]

//   console.log(cut)
//   // you can use break here
//   if (cut === 'Brisket') {
//     break
//   }
// }

// cuts.forEach((cut, index) => {
//   // it will not go throught prototype
//   console.log(index, cut)

//   // you can not use break or contintue here
//   // if (cut === 'Brisket') {
//   //   break
//   // }
// })

// cuts.map((cut) => {
//   console.log(cut)

//   // map is also the same
//   if (cut === 'Brisket') {
//     break
//   }
// })

// for (const index in cuts) {
//   const cut = cuts[index]
//   console.log(cut)
// }

for (const cut of cuts) {
  console.log(cut)

  // you can use break here
  if (cut === 'Brisket') {
    break
  }
}
