var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

require('dotenv').config();

if(!process.env.MLABDB){
  var db = 'mongodb://localhost:27017/TodoApp';
}
else{
  var db = process.env.MLABDB.toHexString();
}

mongoose.connect(db, {useNewUrlParser: true}).then((res) => {
  console.log(res);
}).catch((e) => {
    console.log(e);
});

module.exports = {mongoose};

//'mongodb://localhost:27017/TodoApp'
