const person = { name: 'Wes', age: 100 }
const personProxy = new Proxy(person, {
  get (target, property) {
    // step1
    console.log(`someone is asking for ${JSON.stringify(target)}, ${property}`)
    // step2
    // return 'hihihihihihihihi'

    // step3
    return target[property].toUpperCase()
  },

  // step4
  set (target, property, value) {
    if (typeof value === 'string') {
      target[property] = value.trim()
    }
  }
})

// const name = personProxy.name
// const p = personProxy.p
// return undefined
// console.log(name)
// console.log(p)

personProxy.cool = '    ohohohohoho, cloolll   '
console.log(personProxy.cool)
