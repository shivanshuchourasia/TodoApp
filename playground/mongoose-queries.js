const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5d3146440118c90ef90cf466';

User.findById(id).then((user) => {
  if(!user){
    return console.log('id not found!');
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));