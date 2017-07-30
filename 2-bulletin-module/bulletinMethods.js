var {app} = require('../0-server/server');
var {Bulletin} = require('./bulletinModel');

//POST
var bulletinPost = () => {
  app.post('/bulletins', (req, res) => {
    var body = req.body;
    var bulletin = new Bulletin(body);
    console.log(body);

    bulletin.save().then((bulletin) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(bulletin);
    }).catch((e) => {
      res.status(400).send(e);
    })
  });
}

//GET
var bulletinGet = () => {
  app.get('/bulletins', (req, res) => {
    Bulletin.find().then((bulletins) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(bulletins);
    }).catch((e) => {
      res.status(400).send(e);
    });
  })
}

module.exports = {
  bulletinPost,
  bulletinGet
}
