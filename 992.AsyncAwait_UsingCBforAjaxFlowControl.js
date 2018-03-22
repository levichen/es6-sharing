// 1. Get User's first follower
// 2. Get this follower's repo

const request = require('request')
const apiToken = ''

function getTopFollowerByUserName (username, cb) {
  const options = {
    uri: `https://api.github.com/users/${username}/followers?access_token=${apiToken}`,
    method: 'GET',
    headers: {
      'User-Agent': 'Request-Promise'
    }
  }

  request(options, (err, res, body) => {
    let json = JSON.parse(body)
    cb(json[0])
  })
}

function getTopRepoByUserName (username, cb) {
  console.log(username)
  const options = {
    uri: `https://api.github.com/users/${username}/repos?access_token=${apiToken}`,
    method: 'GET',
    headers: {
      'User-Agent': 'Request-Promise'
    }
  }

  request(options, (err, res, body) => {
    let json = JSON.parse(body)
    cb(json[0])
  })
}

getTopFollowerByUserName('levichen', (follower) => {
  getTopRepoByUserName(follower.login, (repo) => {
    console.log(repo)
  })
})
