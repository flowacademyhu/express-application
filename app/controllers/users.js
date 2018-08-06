const express = require('express');
const users = express.Router();

users.get('/', (req, res) => {
  res.render('index');
});

module.exports = users;
