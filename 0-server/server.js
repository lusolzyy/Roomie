var {mongoose} = require('./db/mongoose');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {
  app
}
