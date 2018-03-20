
const dogs = new Map()

dogs.set('Snickers', 3)
dogs.set('Sunny', 2)
dogs.set('Hugo', 10)

console.log(dogs)
console.log(dogs.has('Snickers'))
console.log(dogs.get('Snickers'))
dogs.delete('Hugo')

console.log(dogs)

dogs.forEach((val, key) => console.log(val, key))

for (const dog of dogs) {
  console.log(dog)
}

// use spread
for (const [key, val] of dogs) {
  console.log(key, val)
}

dogs.clear()

console.log(dogs)
