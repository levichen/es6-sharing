// practice1
function calculateBill (total, tax, tip) {
  tax = tax || 0.15
  tip = tip || 0.25

  return total + (total * tax) + (total * tip)
}

const totalBill = calculateBill(100)

console.log(totalBill)

// practice2
function calculateBill2 (total, tax = 0.15, tip = 0.25) {
  return total + (total * tax) + (total * tip)
}

const totalBill2 = calculateBill2(100)

console.log(totalBill2)
