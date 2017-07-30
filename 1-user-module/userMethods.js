var {app} = require('../0-server/server');
var {User} = require('./userModel');

//POST
var userPost = () => {
  app.post('/users', (req, res) => {
    var body = req.body;
    var user = new User(body);
    console.log(body);

    user.save().then((user) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
  });
}

//GET
var userGet = () => {
  app.get('/users', (req, res) => {
    User.find().then((users) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(users);
    }).catch((e) => {
      res.status(400).send(e);
    });
  })

}

module.exports = {
  userPost,
  userGet
}
