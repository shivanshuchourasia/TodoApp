var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mlabDB = 'mongodb+srv://Shivanshu:qr782Hep66EDdtZl@todo-app-qhj7g.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mlabDB || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true})
  .catch((e) => {
    console.log('error');
  });

module.exports = {mongoose};

//qr782Hep66EDdtZl

//'mongodb://localhost:27017/TodoApp'