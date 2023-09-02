const http = require('node:http');

const server = http.createServer((req, res) => {
  console.log('---')
  console.log(new Date())
  console.log(`${req.method} ${req.url}`)
  console.log(req.headers)

  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    console.log(body)
    res.end('OK');
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log(`Server running at http://127.0.0.1:3000/`);
});
