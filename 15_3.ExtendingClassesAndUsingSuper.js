
class Animal {
  constructor (name) {
    this.name = name
    this.thirst = 100
    this.belly = []
  }

  drink () {
    this.thirst -= 10
    return this.thirst
  }

  eat (food) {
    this.belly.push(food)
    return this.belly
  }
}

class Dog extends Animal {
  constructor (name, breed) {
    super(name)
    // this.name = name
    this.breed = breed
  }

  bark () {
    console.log(`bark bark! I am ${this.name}`)
  }
}

const snickers = new Dog('Snickers', 'King Charles')
snickers.bark()
