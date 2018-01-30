const race = '100m Dash'
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos']

const win = winners.map((winner, index) => {
  return {
    name: winner,
    race: race,
    place: index + 1
  }
})

const ages = [1, 22, 33, 9, 100]

const age = ages.filter((age) => {
  return age > 30
})

console.log(age)
