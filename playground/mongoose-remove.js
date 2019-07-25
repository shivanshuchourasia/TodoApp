const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndDelete('5d3928329c2f382af8c2ea3d').then((todo) => {
  console.log(todo);
})