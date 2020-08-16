#!/usr/bin/node
/*
    firts app.
*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/plain');
  res.end('my firts server!\n');
});

server.listen(port, hostname, () => {
  /*single quotes are not used in this line,
  this character must be used (`)*/
  console.log(`the server is running htttp://${hostname}:${port}`);
});
