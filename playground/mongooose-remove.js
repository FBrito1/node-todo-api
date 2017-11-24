const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/moongose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

/* Todo.remove({}).then((result) => {
    console.log(result)
}); */

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a183b1c73038a750399e100'}).then((todo) => {
    console.log(todo)
});

Todo.findByIdAndRemove('5a183b1c73038a750399e100').then((todo) => {
    console.log(todo);
});