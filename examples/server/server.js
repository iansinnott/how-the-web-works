const http = require('http');

// Create an HTTP server and define how we handle requests
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hey');
  console.log(`"${req.method} ${req.url} HTTP/${req.httpVersion}"`, 200);
});

// Start the server listening on port 8080
server.listen(8080, () => {
  console.log('Server running on localhost:8080');
});
