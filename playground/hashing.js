const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash('password1', salt, (err, hash) => {
//     console.log(hash);
//   })
// })

var hashed = '$2a$10$cNu2UHzXVMrrSR182d7pUuHTuqmYP7hPKKFQAisa6wJ1c03ZtMgFO';
bcrypt.compare('word1', hashed, (err, res) => {
  console.log(res);
})


// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);