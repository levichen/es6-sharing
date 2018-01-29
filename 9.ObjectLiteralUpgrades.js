const first = 'Snickers'
const last = 'Bos'
const age = 8
const breed = 'King Charles Cav'

const dog = {
  first: first,
  last: last,
  age: age,
  breed: breed
}

const dog1 = {
  last,
  age,
  breed
}

const dog2 = {
  firstName: first,
  last,
  age,
  breed,
  pals: ['Hugo', 'Sunny']
}

console.log(dog)
console.log(dog1)
console.log(dog2)

/***/
const modal = {
  create: function (msg) {
    console.log(msg)
  },
  open: function (content) {
    console.log(content)
  }
}

modal.create(123)
modal.open('This is content')

const modal2 = {
  create (msg) {
    console.log(msg)
  },
  open (content) {
    console.log(content)
  }
}

modal2.create(123)
modal2.open('This is content')

/***/
const key = 'pocketColor'
const value = '#ffc600'

function invertColor (color) {
  return 'red'
}

const tShirt = {
  [key]: value,
  [`${key}Opposite`]: invertColor(value)
}
let tShirt2 = {}

tShirt2[key] = value
tShirt2[`${key}Opposite`] = invertColor(value)
console.log(tShirt2)
