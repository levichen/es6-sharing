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

  return rp(options).then(followers => followers[0])
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

  return rp(options).then(repos => repos[0])
}

getTopFollowerByUserName('levichen')
  .then((follower) => {
    return getTopRepoByUserName(follower.login)
  })
  .then((repo) => {
    console.log(repo.full_name)
  })

