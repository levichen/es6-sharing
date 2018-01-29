// some -> one is true
// every -> all is true

const ages = [32, 15, 19, 12]
const youngins = [5, 12, 13, 17]

const adultPresent = ages.some(age => age >= 18)
const adultPresent2 = youngins.some(age => age >= 18)
console.log(adultPresent)
console.log(adultPresent2)

const allOldEnough = ages.every(age => age >= 18)
console.log(allOldEnough)
