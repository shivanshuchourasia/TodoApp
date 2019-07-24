var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

require('dotenv').config();

const mlabDB = `mongodb+srv://${process.env.MLAB_USERNAME}:${process.env.MLAB_PASSWORD}@todo-app-qhj7g.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(mlabDB || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true})
  .catch((e) => {
    console.log('error');
  });

module.exports = {mongoose};

//'mongodb://localhost:27017/TodoApp'