
const person = {
  first: 'Wes',
  last: 'Bos',
  country: 'Canada',
  city: 'Hamilton',
  twitter: '@wesbos'
}

const { first, last } = person

console.log(first, last)

/*****/
const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer'
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
}

const { twitter, facebook } = wes.links.social

console.log(twitter, facebook)

/*****/
// alias
const { twitter: tweet, facebook: fb } = wes.links.social
console.log(tweet, fb)

const settings = { width: 300, color: 'black' }
// set default value
const { width = 100, height = 100, color = 'blue', fontSize = 25 } = settings

console.log(width, height, color, fontSize)

// WTF
// w -> 800 then rename as newWidth
// h -> default value 500 then rename newHeight
const { w: newWidth = 400, h: newHeight = 500 } = { w: 800 }

console.log(newWidth, newHeight)
