const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/moongose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5a171507a22ab50411c8bb30';


User.findById(id).then((user) => {
    if (!user) {
       return console.log('User not found!');
    }
    console.log('User: ', user);
}).catch((error) => console.log(error));



//var id = '5a174ad4c9fff66c0c478e17';

/* if (!ObjectId.isValid(id)) {
    console.log('Invalid ID');
} */
/* Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos ', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo ', todo);
}); */

/* Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found!');
    }
    console.log('Todo by id ', todo);
}).catch((error) => console.log(error)); */