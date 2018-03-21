// 1. Get User's first follower
// 2. Get this follower's repo

const rp = require('request-promise')
const apiToken = ''

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
  rp(options).then(followers => dataGen.next(followers[0]))
}

function getTopRepoByUserName (username) {
  var options = {
    uri: `https://api.github.com/users/${username}/repos`,
    qs: {
      access_token: apiToken
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }

  // rp(options).then(followers => dataGen.next('this is follower'))
  rp(options).then(repos => dataGen.next(repos[0]))
}

function * steps () {
  console.log('fetching follower')
  const topFollower = yield getTopFollowerByUserName('levichen')
  console.log(topFollower)

  console.log('fetching repo')
  const topRepo = yield getTopRepoByUserName(topFollower.login)
  console.log(topRepo)
}

const dataGen = steps()
dataGen.next()
