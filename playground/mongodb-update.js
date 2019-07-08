const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        return console.log(`Unable to connect to MongoDB server ${err}`);
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID("5d238b33cc086f30a44a96d7")
    //     },{
    //         $set: {
    //             completed: true
    //         }
    //     },{
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID("5d2394913b1595914c8d496e")
        },{
            $set: {
                name: 'Shivanshu'
            },
            $inc: {
                age: 1
            }
        },{
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    })

    client.close();
})