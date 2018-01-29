
const details = ['Wes Bos', 123, 'wesbos.com']
const [name, id, website] = details
console.log(name, id, website)

const data = 'Basketball,Sport,90210,23,wes,bos,cool'
const [itemName, category, sku, inventory] = data.split(',')
console.log(itemName, category, sku, inventory)

const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker']
const [captain, assistant, ...players] = team
console.log(captain, assistant, players)
