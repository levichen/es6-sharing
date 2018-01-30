
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos']

// arrow function's this is parant
winners.map((winner, index) => {
  console.log(this)
})

// normal function's this is just this
winners.map(function (winner, index) {
  console.log(this)
})
