var {app} = require('../0-server/server');
var {User} = require('./userModel');

var userPost = () => {
  app.post('/users', (req, res) => {
    var body = req.body;
    var user = new User(body);
    console.log(body);

    user.save().then((user) => {
      res.send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
  });
}

module.exports = {
  userPost
}
