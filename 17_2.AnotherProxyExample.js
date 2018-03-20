
const phoneHandler = {
  set (target, property, value) {
    target[property] = value.match(/[0-9]/g).join('')
  },
  get (target, property) {
    return target[property].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3')
  }
}

const phoneNumbers = new Proxy({}, phoneHandler)

phoneNumbers.work = '(234) 234 2345'
console.log(phoneNumbers.work)
