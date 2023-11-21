#!/usr/bin/env node

const http = require("http");
const countStudents = require("./3-read_file_async");
const path = require("path");
const fs = require('fs')
const { error } = require("console");
const port = 1245

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200
	if (req.url === '/') {
		res.end("Hello Holberton School!");
	} else if (req.url == '/students') {
		// read the students database
		console.log('This is the list of out students')
		countStudents('database.csv')
		.then(() => {
			// respond with the same content as 3-read_file_async
			const filepath = path.join(__dirname, 'database.csv');
			const fileContent = fs.readFileSync(filepath, 'utf-8');
			res.end(fileContent)
		})
		.catch((error) => {
			res.end(`${error.message}`)
		});
	} 
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
