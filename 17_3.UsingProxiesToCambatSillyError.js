// Aspect-Oriented Programming

// const person = { name: 'Wes' }
// person.ID = 123
// person.id = 123
// person.iD 123

const safeHandler = {
  set (target, property, value) {
    const likeKey = Object.keys(target).find(k => k.toLowerCase() === property.toLowerCase())

    if (likeKey) {
      throw new Error(`Opps! Looks like like we already have a ${property}`)
    }

    target[property] = value
  }

}

const saftey = new Proxy({id: 100}, safeHandler)

// saftey.ID = 200
// saftey.name = 'Levi'
