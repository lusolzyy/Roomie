const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//title, description, create, type, status, owner
var BulletinSchema = new Schema({
  title          : {type: String, required: true, trim: true},
  description    : String,
  create         : Date,
  type           : String,
  owner          : {name : String, imageUrl : String}
});

var Bulletin = mongoose.model('Bulletin', BulletinSchema);

module.exports = {
    Bulletin
};
