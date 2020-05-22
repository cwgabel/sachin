const http = require('http')
const url = require('url')

const myURL = new URL('https://example.org:8888');

// Prints 1234

function router (req, res) {
  console.log(req.url)
  res.writeHead(200, { 'Content-type': 'text/html' })
  res.end('<h1>Hello NodeJS!!</h1>')
}

http
  .createServer(router).listen(3000, () => console.log('Server running on port 3000'))
