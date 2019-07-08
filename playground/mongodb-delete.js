const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log(`Unable to connect to MongoDB server ${err}`);
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Attend'}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5d238ed043e4793160ec386b")
    }).then((result) => {
        console.log(result);
    })
})