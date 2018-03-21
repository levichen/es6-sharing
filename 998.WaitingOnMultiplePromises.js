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
