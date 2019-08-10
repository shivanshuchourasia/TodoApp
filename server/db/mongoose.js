var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MLABDB, {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true})
  .catch((e) => {
    console.log(e);
});

module.exports = {mongoose};

