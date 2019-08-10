const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var salt1;

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash('password1', salt, (err, hash) => {
    console.log(hash);
    console.log(salt);
  })
})

// console.log(salt1);
// var hashed1 = '$2a$10$cNu2UHzXVMrrSR182d7pUuHTuqmYP7hPKKFQAisa6wJ1c03ZtMgFO';
// var hashed2 = '$2a$10$aA96q3EgR3MTMaCc1Mn2nuWAZf88NfQGeJ7cMeiqQtrd406fkwpaq';
// bcrypt.compare('password1', hashed1, (err, res) => {
//   console.log(res);
// })

// bcrypt.compare('password1', hashed2, (err, res) => {
//   console.log(res);
// })


// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);