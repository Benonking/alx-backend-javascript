#!/usr/bin/env node

const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
