var {mongoose} = require('./db/mongoose');
var bodyParser = require('body-parser');
var express = require('express');

const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {
  app
}
