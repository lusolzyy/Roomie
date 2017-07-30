const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var {User} = require('../1-user-module/userModel');

//title, description, create, due, type, status, owner, doer
var TodoSchema = new Schema({
  title          : {type: String, required: true, trim: true},
  description    : String,
  create         : Date,
  due            : Date,
  type           : String,
  status         : Number,
  owner          : {name : String, imageUrl : String},
  doer           : {name : String, imageUrl : String}
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    Todo
};
