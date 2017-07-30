var {app} = require('../0-server/server');
var {Todo} = require('./todoModel');

//POST
var todoPost = () => {
  app.post('/todos', (req, res) => {
    var body = req.body;
    var todo = new Todo(body);
    console.log(body);

    todo.save().then((todo) => {
      res.send(todo);
    }).catch((e) => {
      res.status(400).send(e);
    })
  });
}

//GET
var todoGet = () => {
  app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
      res.send(todos);
    }).catch((e) => {
      res.status(400).send(e);
    });
  })
}

//Update
var todoPut = () => {
  app.put('/todos/:todoId', (req, res) => {
    Todo.findById(req.params.todoId).then((todo) => {
      todo.doer = req.body.doer;
      todo.status = req.body.status;
      todo.save().then((todo) => {
        console.log(req.body);
        res.send(todo);
      }).catch((e) => {
        res.status(400).send(e);
      })
    }).catch((e) => {
      res.status(400).send(e);
    })
  });
}

module.exports = {
  todoPost,
  todoGet,
  todoPut
}
