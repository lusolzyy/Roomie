var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/Roomie');
mongoose.connect('mongodb://lusolzyy:Lusolzyy1993@ds157040.mlab.com:57040/roommate');

module.exports =  {
  mongoose
};
