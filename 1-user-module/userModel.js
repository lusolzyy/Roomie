const mongoose = require('mongoose');

//id;  name;  imageUrl;  homeId;
var User = mongoose.model('User', {
  name : {
    type: String,
    trim: true,
    minlength: 1
  },
  imageUrl : {
    type : String
  },
  homeId : {
    type : String
  }
});

module.exports = {
    User
};
