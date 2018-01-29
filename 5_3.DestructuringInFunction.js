
function convertCurrency (amount) {
  const converted = {
    USD: amount * 0.76,
    GPB: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.30
  }

  return converted
}

// auto-match variable, whatever the order
const { MEX, USD, AUD } = convertCurrency(100)
console.log(MEX, USD, AUD)

// Do not need to care about the order
function tipCalc ({ total, tip = 0.15, tax = 0.13 }) {
  return total + (tip * total) + (tax * total)
}

const bill = tipCalc({ total: 200, tip: 0.12, tax: 0.13 })
console.log(bill)

// when miss tax param
const bill2 = tipCalc({ total: 200, tip: 0.12 })
console.log(bill2)

function tipCalc1 ({ total = 100, tip = 0.15, tax = 0.13 }) {
  return total + (tip * total) + (tax * total)
}

const bill3 = tipCalc1()

console.log(bill3)

// pass {} -> for {total = 100...} default
// if there is no object pass into these function
// set the default is {} then all value will be default value
function tipCalc2 ({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
  return total + (tip * total) + (tax * total)
}

const result = tipCalc2({ total: 200, tip: 0.20, tax: 0.13 })
console.log(result)

const result1 = tipCalc2()
console.log(result1)

const result2 = tipCalc2({ total: 200, tip: 0.1 })
console.log(result2)
