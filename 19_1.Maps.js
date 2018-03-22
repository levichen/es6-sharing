
// 注意區分 Object 和 Map，只有模擬現實世界的實體對象時，
// 才使用 Object。如果只是需要key: value的數據結構，
// 使用 Map 結構。因為 Map 有內建的遍歷機制。

const dogs = new Map()

dogs.set('Snickers', 3)
dogs.set('Sunny', 2)
dogs.set('Hugo', 10)

console.log(dogs.keys())
console.log(dogs.values())

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
