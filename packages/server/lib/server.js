const https = require('https');

const options = {
  hostname: 'api.github.com',
  path: '/users',
  protocol: 'https:',
  method: 'GET',
  headers: {'user-agent': 'node.js'}

}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()