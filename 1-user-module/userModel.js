const mongoose = require('mongoose');

//id;  name;  imageUrl;  homeId;
var User = mongoose.model('User', {
  name : {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique:false
  },
  imageUrl : {
    type : String,
    unique:false
  },
  homeId : {
    type : String,
    required : true,
    unique:false
  }
});

module.exports = {
    User
};
