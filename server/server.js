var express = require('express');
var bodyParser = require('body-parser');
var { ObjectId } = require('mongodb');

var { mongoose } = require('./db/moongose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
   var todo = new Todo({
       text: req.body.text
   });

   todo.save().then((doc) => {
    res.send(doc);
   }, (error) => {
    res.status(400).send(error);
   });
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos })
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }, (error) => {
        res.status(400).send();
    });

});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = { app };