const bcrypt = require('bcrypt-nodejs');
const User = require('../models/User');

function signUp(req, res) {
  console.log('End Point de signUp');
}

module.exports = {
  signUp
};
