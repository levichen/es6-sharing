const brunch = new Set()

// as people start coming in
brunch.add('wes')
brunch.add('Sarah')
brunch.add('Simone')

// ready to open
const line = brunch.values()
console.log(line.next().value)
console.log(line.next().value)

console.log(brunch)
console.log(line)

brunch.add('Peter')
brunch.add('Marry')

console.log(line.next().value)
console.log(line.next().value)
