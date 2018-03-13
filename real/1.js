const key = 'pocketColor'
const value = '#ffc600'

function invertColor (color) {
  return 'red'
}
const p = {
  [key]: value,
  [`${key}Oppostie`]: invertColor(value)
}

console.log(p.pocketColor)
