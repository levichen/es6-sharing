const rp = require('request-promise')
const apiToken = ''

// example 1
// function getTopFollowerByUserName (username) {
//   var options = {
//     uri: `https://api.github.com/users/${username}/followers`,
//     qs: {
//       access_token: apiToken
//     },
//     headers: {
//       'User-Agent': 'Request-Promise'
//     },
//     json: true
//   }

//   // rp(options).then(followers => dataGen.next('this is follower'))
//   return rp(options).then(followers => followers[0])
// }

// async function go () {
//   console.log('start 1')
//   const name = await getTopFollowerByUserName('levichen')
//   console.log(name)
//   console.log('start 2')
//   const name2 = await getTopFollowerByUserName('jonas-fan')
//   console.log(name2)
// }

// go()

// example 2
function getTopFollowerByUserName (username) {
  var options = {
    uri: `https://api.github.com/users/${username}/followers`,
    qs: {
      access_token: apiToken
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }

  // rp(options).then(followers => dataGen.next('this is follower'))
  return rp(options).then(followers => followers[0])
}

async function go () {
  const name = getTopFollowerByUserName('levichen')
  const name2 = getTopFollowerByUserName('jonas-fan')
  // console.log(name)
  const res = await Promise.all([name, name2])
  const [leviChen, jonasFan] = res
  console.log(leviChen, jonasFan)
}

go()

// http://es6.ruanyifeng.com/#docs/async#%E4%B8%8E%E5%85%B6%E4%BB%96%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86%E6%96%B9%E6%B3%95%E7%9A%84%E6%AF%94%E8%BE%83
