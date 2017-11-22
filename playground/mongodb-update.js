const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

  /*   db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId("5a15c190a22f0967c1ac6ed1")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
   
 */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5a14834a14ca8834948f10f6")
    }, {
        $set: {
            name: 'Fabio'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    //db.close();
});