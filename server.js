const express = require('express');
const app = express();
const path = require('path');
const jsonData = require('./jsonData');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

// Apply middleware
app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/json', (request, response) => {
  // Respond with JSON data here
  response.status(200).json(jsonData);
});

// Adding middlware to intercept 404 responses.
app.use(function (req, res, next) {
  res.status(404).send("Sorry, That Resources Does Not Exist")
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});