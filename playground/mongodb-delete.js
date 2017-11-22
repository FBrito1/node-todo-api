const { MongoClient, ObjectId } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    //Delete Many
    /* db.collection('Todos').deleteMany({ text: 'Eat..' }).then((result) => {
        console.log(result)
    }, (err) => {
        console.log('Unable to delete todos.', err);
    }); */
    //Delete One
   /*  db.collection('Todos').deleteOne({ text: 'Eat' }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete todo.', err);
    });
 */

    //findOneAndDelete
/* 
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete todo.', err);
    }); */

    /* db.collection('Users').deleteMany({ name: 'Fabio' }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete users.', err);
    }); */

    db.collection('Users').findOneAndDelete({
        _id: new ObjectId("5a1577263d517c5594039e48")
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete user.', err);
    });

    //db.close();
});